import { getSession } from "@/auth";
import app from "@/app/app";

export const Users = {
  current: async () => {
    const session = await getSession();

    if (!session) {
      throw new Error("No session provided");
    }

    return Users.findOneByEmail(session!.user!.email!);
  },
  findOneByEmail: async (email: string) => {
    const preparedEmail = email.trim().toLowerCase();

    const user = await app.db
      .selectFrom("aidesigntool.users")
      .selectAll()
      .where("email", "=", preparedEmail)
      .executeTakeFirstOrThrow();

    return user;
  },
};
