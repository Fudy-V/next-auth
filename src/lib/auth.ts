import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized: async ({ request, auth }) => {
      const { pathname } = request.nextUrl;
      if (!auth && pathname !== "/signin") {
        return false; // ログインしていない場合、他のルートにアクセスさせない
      }
      return true;
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});
