import { NextResponse } from "next/server";


async function handler(request: Request) {

    const body = await request.json();
    const { } = body;

    try {


        return NextResponse.json(
            {
                generatedImage: "/example.svg"
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export { handler as GET, handler as POST }
