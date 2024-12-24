import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { Users } from "@/models/users";

const authOptions: AuthOptions = {
  secret: "123",

  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        try {
          const user = await Users.findOneByEmail(email);

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
  callbacks: {
    async redirect({ url, baseUrl }) {
      // todo is does not work
      console.log(url, baseUrl);
      return url
    },
  },
  session: {
    strategy: "jwt",
  },
};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
