import { AuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import app from "@/app/app";


const authOptions: AuthOptions = {
    secret: "123",
    providers: [

        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials ?? {};

                if (!email || !password) {
                    throw new Error("Email and password are required");
                }

                try {

                    const preparedEmail = email.trim().toLowerCase()

                    const user = await app.db.selectFrom("aidesigntool.users").selectAll().where("email", "=", preparedEmail).executeTakeFirst();


                    if (!user) {
                        throw new Error("No user found with this email");
                    }

                    const isValid = await bcrypt.compare(password, user.password!);

                    if (!isValid) {
                        throw new Error("Invalid password");
                    }

                    return { id: user.id, email: user.email };
                } catch (error) {
                    console.error(error);
                    throw new Error("Authentication failed");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },

};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }