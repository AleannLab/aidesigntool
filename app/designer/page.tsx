"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Wand2 } from "lucide-react";
import axios from "axios";
import { categories, icons } from "@/app/designer/categories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/app/hooks/useUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const LingerieDesigner = () => {
  const [generatedImage, setGeneratedImage] = useState();
  const [error, setError] = useState<string | null>(null);

  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [customPrompt, setCustomPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log(searchParams);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const id = params.get("id");

    if (id) {
      const fetch = async () => {
        try {
          setIsGenerating(true);

          const { data } = await axios.get(`/api/generate?id=${id}`);

          if (data.generatedImage) {
            setGeneratedImage(data.generatedImage);
            setIsGenerating(false);
            return;
          }

          if (data.error) {
            if (data.error === "timed_out") {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              return fetch();
            }
            setError(data.error);
          }
          setIsGenerating(false);
          return;
        } catch (err) {
          setError((err as Error).message);
          setIsGenerating(false);
        }
      };

      fetch();
    }
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const { balance, email, refetchBalance } = useUser();

  const getCurrentOptions = () => {
    if (selectedPath.length === 0) {
      return Object.keys(categories);
    }

    const category = selectedPath[0].toLowerCase();
    if (categories[category]) {
      return categories[category].attributes;
    }

    return [];
  };

  const handleSelection = (option: string) => {
    const newPath = [...selectedPath, option];
    setSelectedPath(newPath);
  };

  const handleAttributeSelection = (attribute: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const { data } = await axios.post("/api/generate", {
        selections,
        customPrompt,
        selectedPath,
      });

      // searchParams.append("id", data.id);

      // setGeneratedImage(data.generatedImage);

      if (data.error) {
        setError(data.error);
      }

      if (!data.id) {
        setError("An error occurred");
        return;
      }
      router.push(pathname + "?" + createQueryString("id", data.id));

      await refetchBalance();
    } catch (err) {
      console.error(err);
      setError("An error occurred");
    }
  };

  const handleReset = () => {
    setSelectedPath([]);
    setSelections({});
    setCustomPrompt("");
  };

  const currentOptions = getCurrentOptions();
  const isAttributeSelection = selectedPath.length === 1;

  return (
    <div className="flex min-h-screen bg-white flex-col sm:flex-row">
      <Card className="max-w-[444px] border-0 rounded-none">
        <CardContent className="h-full flex flex-col p-6">
          <header className="flex items-center justify-between mb-8 pt-2">
            <div className="flex items-center gap-3">
              <Avatar
                onClick={() => router.push("/account")}
                className="h-10 w-10"
              >
                <AvatarFallback>
                  {email ? email[0].toUpperCase() : "M"}
                </AvatarFallback>
              </Avatar>
              <div className="">
                <span className="font-medium"></span>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary" className="ml-2">
                {balance} credits
              </Badge>
              <Button
                onClick={() => router.push("/pricing")}
                variant="default"
                size="sm"
                className="bg-pink-600 hover:bg-pink-700"
              >
                Add
              </Button>
            </div>
          </header>

          <div className="flex gap-2 text-sm text-gray-500 px-[16px] mb-2">
            {selectedPath.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Button
                  onClick={handleReset}
                  size="sm"
                  icon={
                    <svg
                      className="!w-4 !h-4"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-1.90735e-06 6.00005C0.00486469 6.52616 0.216843 7.02915 0.589998 7.40005L4.88 11.7001C5.06736 11.8863 5.32081 11.9908 5.585 11.9908C5.84918 11.9908 6.10264 11.8863 6.29 11.7001C6.38373 11.6071 6.45812 11.4965 6.50889 11.3746C6.55966 11.2528 6.5858 11.1221 6.5858 10.9901C6.5858 10.858 6.55966 10.7273 6.50889 10.6055C6.45812 10.4836 6.38373 10.373 6.29 10.2801L3 7.00005L13 7.00005C13.2652 7.00005 13.5196 6.89469 13.7071 6.70716C13.8946 6.51962 14 6.26527 14 6.00005C14 5.73484 13.8946 5.48048 13.7071 5.29295C13.5196 5.10541 13.2652 5.00005 13 5.00005L3 5.00005L6.29 1.71005C6.4783 1.52307 6.58462 1.26895 6.58556 1.00359C6.58649 0.738224 6.48198 0.483356 6.295 0.295052C6.10802 0.106748 5.8539 0.000432014 5.58853 -0.000505447C5.32317 -0.00144291 5.0683 0.103075 4.88 0.290052L0.589998 4.59005C0.214411 4.9634 0.00223064 5.47048 -1.90735e-06 6.00005Z"
                        fill="white"
                      />
                    </svg>
                  }
                ></Button>
                <span className="capitalize">{item}</span>
                {index < selectedPath.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
          {selectedPath.length === 0 ? (
            <div className="flex flex-wrap justify-center gap-6 px-[42px] py-[32px] px-[16px]">
              {(currentOptions as string[]).map((category) => (
                <Button
                  key={category}
                  icon={icons[category]!}
                  variant="secondary"
                  className="h-24 capitalize w-[130px] h-[130px]"
                  onClick={() => handleSelection(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          ) : isAttributeSelection ? (
            <div
              className="space-y-6 px-[16px] grid"
              style={{
                gridTemplateRows: "1fr auto",
                maxHeight: "calc(100vh - 122px)",
              }}
            >
              <div className="flex gap-4 flex-col overflow-auto">
                {(
                  currentOptions as {
                    name: string;
                    options: string[];
                  }[]
                ).map((attribute) => (
                  <div key={attribute.name} className="space-y-2">
                    <h3 className="font-semibold">{attribute.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {attribute.options.map((option) => (
                        <Button
                          key={option}
                          size="sm"
                          variant={
                            selections[attribute.name] === option
                              ? "default"
                              : "ghost"
                          }
                          onClick={() =>
                            handleAttributeSelection(attribute.name, option)
                          }
                          className="text-sm"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="space-y-2">
                  <h3 className="font-semibold">Custom Details</h3>
                  <Textarea
                    placeholder="Add any additional details or preferences..."
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    className="h-24"
                  />
                </div>
              </div>
              <div className="flex gap-4 py-[8px]">
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  className="h-[56px] px-[16px]"
                >
                  Reset
                </Button>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full h-full"
                >
                  <Wand2 size={24} className="mr-2" />
                  {isGenerating ? "Generating..." : "Generate Your Design"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[16px]">
              {(currentOptions as string[]).map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="h-16"
                  onClick={() => handleSelection(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex-1 flex-col flex items-center justify-center gap-4">
        {generatedImage ? (
          <div className="flex flex-col justify-center gap-[24px]">
            <span className="font-semibold text-[24px] text-center">
              You design is ready
            </span>
            <img
              src={generatedImage}
              alt="demo"
              className="px-[12px] max-h-[65vh]"
            />
            <Button
              className="w-full h-[56px]"
              onClick={() => router.push("/pricing")}
            >
              HD Download
            </Button>
          </div>
        ) : isGenerating ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <p className="text-2xl text-gray-400 font-semibold">
            Use the design panel to start
          </p>
        )}
        {error && (
          <div className="flex justify-center">
            <Badge variant="destructive">{error}</Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default LingerieDesigner;
