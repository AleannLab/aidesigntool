import { NextResponse } from "next/server";
import {Balances} from "@/models/balances";
import {getSession} from "@/auth";
import app from "@/app/app";


async function handler(request: Request) {

    const body = await request.json();
    const { } = body;

    const session = await getSession()

    if (!session) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }
    try {

        const user = await app.db.selectFrom("aidesigntool.users").selectAll().where("email", "=", session!.user!.email!)
            .selectAll()
            .executeTakeFirstOrThrow();


        const balance = await Balances.findOneByUserId(user.id);
        const toSpend = 10;

        if (!balance || balance < toSpend) {
            return NextResponse.json(
                { message: "Insufficient funds" },
                { status: 400 }
            );}

        await Balances.subtract(user.id, toSpend);


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
