import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth?state=sign-up",
  },
  secret: "123",
});

export const config = {
  matcher: ["/designer", "/account"],
};
