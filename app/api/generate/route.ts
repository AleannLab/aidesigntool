import { NextResponse } from "next/server";
import { Balances } from "@/models/balances";
import { getSession } from "@/auth";
import { Users } from "@/models/users";
import { ONE_GENERATION_COST } from "@/app/consts";

async function handler(request: Request) {
  const body = await request.json();
  const {} = body;

  console.log(body);

  const session = await getSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const user = await Users.current();

    const balance = await Balances.findOneByUserId(user.id);
    const toSpend = ONE_GENERATION_COST;

    if (!balance || balance < toSpend) {
      return NextResponse.json(
        { message: "Insufficient funds" },
        { status: 400 },
      );
    }

    await Balances.subtract(user.id, toSpend);

    return NextResponse.json(
      {
        generatedImage: "/example.svg",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export { handler as GET, handler as POST };
