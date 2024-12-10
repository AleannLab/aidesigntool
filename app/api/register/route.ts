import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import app from "@/app/app";
import {Balances} from "@/models/balances";


async function handler(request: Request) {

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json(
            { message: "Email and password are required" },
            { status: 400 }
        );
    }


    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const preparedEmail = email.trim().toLowerCase()

        const user = await app.db.selectFrom("aidesigntool.users").selectAll().where("email", "=", preparedEmail).executeTakeFirst();

        if (user) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        const newUser = await app.db.insertInto("aidesigntool.users").values({ email: preparedEmail, password: hashedPassword })
            .returningAll()
            .executeTakeFirstOrThrow();

        await Balances.add(newUser.id, 80);

        return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 }
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
