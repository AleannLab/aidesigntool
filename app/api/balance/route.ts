import { NextResponse } from "next/server";
import {Balances} from "@/models/balances";
import {getSession} from "@/auth";
import {Users} from "@/models/users";


async function handler() {


    const session = await getSession()

    if (!session) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }
    try {

        const user = await Users.findOneByEmail(session!.user!.email!)

        const balance = await Balances.findOneByUserId(user.id);


        return NextResponse.json(
            {
                balance
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

export { handler as GET }
