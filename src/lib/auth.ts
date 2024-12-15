import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized: async ({ request, auth }) => {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected") return !!auth;
        return true;
      } catch (error) {
        console.error("認証エラー", error);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});
