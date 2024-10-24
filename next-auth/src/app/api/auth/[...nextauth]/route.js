import { AUTH_PROVIDERS } from "@/libs/authProviders";
import { cookies } from "next/headers";

const { default: NextAuth } = require("next-auth");

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: AUTH_PROVIDERS,
  callbacks: {
    async signIn({ account, profile }) {
      let providerKey;
      if (account.provider === "google") {
        providerKey = "google-provider";
      } else if (account.provider === "github") {
        providerKey = "github-provider";
      }
      if (providerKey) {
        cookies().set({
          name: providerKey,
          value: account.provider,
          httpOnly: true,
          path: "/",
        });
      }
      cookies().set({
        name: "login-status",
        value: true,
        httpOnly: true,
        path: "/",
      });
      return true;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
