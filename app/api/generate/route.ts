import { NextResponse } from "next/server";
import { Balances } from "@/models/balances";
import { getSession } from "@/auth";
import { Users } from "@/models/users";
import { ONE_GENERATION_COST } from "@/app/consts";
import { categories } from "@/app/designer/categories";
import axios from "axios";

async function generate(request: Request) {
  const body = await request.json();

  console.log(body);

  const session = await getSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const user = await Users.current();

  try {
    const balance = await Balances.findOneByUserId(user.id);

    if (!balance || balance < ONE_GENERATION_COST) {
      return NextResponse.json(
        { message: "Insufficient funds" },
        { status: 400 },
      );
    }

    await Balances.subtract(user.id, ONE_GENERATION_COST);
    const prompt = generatePrompt(body);

    console.log("Prompt", prompt);

    const generated = await generateCustomImageAstria(prompt);

    if (!generated) {
      await Balances.add(user.id, ONE_GENERATION_COST);
      return NextResponse.json(
        { message: "Failed to generate image" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        id: generated.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    await Balances.add(user.id, ONE_GENERATION_COST);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

const fetchPrompt = async (request: Request) => {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const promptId = url.searchParams.get("id");

  if (!promptId) {
    return NextResponse.json(
      { message: "Prompt ID is required" },
      { status: 400 },
    );
  }

  const [images, error] = await fetchPromptImages(promptId);

  return NextResponse.json(
    {
      generatedImage: images?.length ? images[0] : null,
      error: error ?? null,
    },
    { status: 200 },
  );
};

export { fetchPrompt as GET, generate as POST };

function generatePrompt(body: {
  selections: Record<string, string>;
  customPrompt: string;
  selectedPath: string[];
}) {
  const { selections, customPrompt, selectedPath } = body;

  if (!selectedPath || selectedPath.length === 0) {
    throw new Error("selectedPath is required to determine the category.");
  }

  const categoryKey = selectedPath[0];
  const category = categories[categoryKey];

  if (!category) {
    throw new Error(`Category '${categoryKey}' not found in categories.`);
  }

  const attributes = category.attributes;
  const promptParts = [];

  for (const { name } of attributes) {
    const value = selections[name];
    if (value) {
      promptParts.push(`${name}: ${value}`);
    }
  }

  if (customPrompt && customPrompt.trim()) {
    promptParts.push(customPrompt.trim());
  }

  const prompt = promptParts.join(", ");
  const finalPrompt = `Generate an image of a sexy woman wearing ${categoryKey} lingerie with the following features: ${prompt}.`;

  return finalPrompt;
}

const ASTRIA_API_KEY = process.env.ASTRIA_API_KEY;
const ASTRIA_TUNE_ID = process.env.ASTRIA_TUNE_ID;

async function generateCustomImageAstria(
  prompt: string,
  imageRequestAmount = 1,
  astriaURL = `https://api.astria.ai/tunes/${ASTRIA_TUNE_ID}/prompts`,
  inpaintingActive = false,
  faceCorrectActive = false,
  superResolutionActive = false,
  imageGenerationSuffix = "",
  hiresFixActive = false,
  negativePromptImageGeneration = "",
  imageGenerationResolution = "512x768",
  scheduler = "euler",
  filmGrainActive = false,
  imageGenerationSteps = 30,
  imageGenerationFaceSwapActive = false,
  imageGenerationCfgScale = 9,
  astriaImageGenerationBackendVersion = 0,
) {
  if (!ASTRIA_API_KEY || !ASTRIA_TUNE_ID) {
    console.error("ASTRIA_API_KEY or ASTRIA_TUNE_ID is missing");
    return null;
  }

  console.log("Generating custom image with Astria");
  const url = astriaURL;

  // const promptText = prompt
  //     .toLowerCase()
  //     .includes(imageGenerationTokenClassname.toLowerCase())
  //     ? `${loraModel}${prompt}, ${imageGenerationSuffix}`
  //     : `${prompt}, ${imageGenerationSuffix}`;

  const promptText = `sks lora: ${prompt}, ${imageGenerationSuffix}`;

  const payload = {
    prompt: {
      text: promptText,
      negative_prompt: negativePromptImageGeneration,
      num_images: imageRequestAmount,
      super_resolution: superResolutionActive,
      inpaint_faces: inpaintingActive,
      hires_fix: hiresFixActive,
      face_correct: faceCorrectActive,
      callback: "",
      scheduler,
      film_grain: filmGrainActive,
      steps: imageGenerationSteps,
      face_swap: imageGenerationFaceSwapActive,
      w: parseInt(imageGenerationResolution.split("x")[0], 10),
      h: parseInt(imageGenerationResolution.split("x")[1], 10),
      seed: -1,
      cfg_scale: imageGenerationCfgScale,
      backend_version: astriaImageGenerationBackendVersion,
    },
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ASTRIA_API_KEY}`,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    const responseJson = response.data;

    const promptRequestId = responseJson.id;

    return {
      id: promptRequestId,
      response: responseJson,
    };
  } catch (error) {
    console.error(
      "Error creating custom Astria Image API call:",
      (error as Error).message,
    );
    return null;
  }
}

const fetchPromptImages = async (
  promptRequestId: string,
  imageGenerationTimeout = 240,
) => {
  try {
    let genCycles = 1;
    const imageUrls = [];
    let resultFound = false;

    console.log("Prompt Request ID:", promptRequestId);

    // Check the results every 5 seconds until a result is found or timeout is reached
    while (!resultFound && genCycles < imageGenerationTimeout / 5) {
      try {
        const checkUrl = `https://api.astria.ai/tunes/${ASTRIA_TUNE_ID}/prompts/${promptRequestId}`;
        const checkHeaders = {
          Authorization: `Bearer ${ASTRIA_API_KEY}`,
        };

        const checkResponse = await axios.get(checkUrl, {
          headers: checkHeaders,
        });
        const checkResponseJson = checkResponse.data;

        const createdImages = checkResponseJson.images || [];

        if (createdImages.length > 0) {
          resultFound = true;
          console.log("Generation Time: " + genCycles * 5);

          imageUrls.push(...createdImages);

          return [imageUrls, ""];
        } else {
          console.log("Waiting for results...");
          genCycles++;
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } catch (error) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.error("Error checking results:", (error as Error).message);
      }
    }
    return [imageUrls, "timed_out"];
  } catch (err) {
    console.error("Error fetching prompt images:", (err as Error).message);
    return [null, (err as Error).message];
  }
};
