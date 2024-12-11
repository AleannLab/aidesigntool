import { getSession } from "@/auth";
import app from "@/app/app";

export const Users = {
  current: async () => {
    const session = await getSession();

    if (!session) {
      throw new Error("No session provided");
    }

    const user = await Users.findOneByEmail(session!.user!.email!);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
  findOneByEmail: async (email: string) => {
    const preparedEmail = email.trim().toLowerCase();

    const user = await app.db
      .selectFrom("aidesigntool.users")
      .selectAll()
      .where("email", "=", preparedEmail)
      .executeTakeFirst();

    return user;
  },
};
