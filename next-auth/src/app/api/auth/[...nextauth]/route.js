import { COOKIE_KEYS } from "@/app/constants/cookie-keys";
import { AUTH_PROVIDERS } from "@/libs/authProviders";
import { cookies } from "next/headers";

const { default: NextAuth } = require("next-auth");

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: AUTH_PROVIDERS,
  callbacks: {
    async signIn({ account, profile }) {
      let providerKey;
      let nameKey;
      let avatarKey;

      if (account.provider === "google") {
        providerKey = COOKIE_KEYS.GOOGLE_PROVIDER;
        nameKey = COOKIE_KEYS.GOOGLE_NAME;
        avatarKey = COOKIE_KEYS.GOOGLE_AVATAR;
      } else if (account.provider === "github") {
        providerKey = COOKIE_KEYS.GITHUB_PROVIDER;
        nameKey = COOKIE_KEYS.GITHUB_NAME;
        avatarKey = COOKIE_KEYS.GITHUB_AVATAR;
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
        name: nameKey,
        value: profile?.name,
        httpOnly: true,
        path: "/",
      });
      cookies().set({
        name: avatarKey,
        value: profile?.picture || profile?.avatar_url,
        httpOnly: true,
        path: "/",
      });
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
