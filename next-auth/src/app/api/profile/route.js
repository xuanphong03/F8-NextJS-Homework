import { COOKIE_KEYS } from "@/app/constants/cookie-keys";
import { AUTH_PROVIDERS } from "@/libs/authProviders";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(AUTH_PROVIDERS);
  console.log("session", session);

  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 400 });
  }
  const googleName = cookies().get(COOKIE_KEYS.GOOGLE_NAME)?.value;
  const googleAvatar = cookies().get(COOKIE_KEYS.GOOGLE_AVATAR)?.value;
  const googleProvider = cookies().get(COOKIE_KEYS.GOOGLE_PROVIDER)?.value;
  const githubName = cookies().get(COOKIE_KEYS.GITHUB_NAME)?.value;
  const githubAvatar = cookies().get(COOKIE_KEYS.GITHUB_AVATAR)?.value;
  const githubProvider = cookies().get(COOKIE_KEYS.GITHUB_PROVIDER)?.value;

  const providers = [];
  const githubProfile = {};
  const googleProfile = {};

  if (googleProvider) {
    providers.push(googleProvider);
    googleProfile.name = googleName;
    googleProfile.avatar = googleAvatar;
  }
  if (githubProvider) {
    providers.push(githubProvider);
    githubProfile.name = githubName;
    githubProfile.avatar = githubAvatar;
  }
  return NextResponse.json(
    {
      success: {
        providers,
        profile: { ...session },
        google: googleProfile,
        github: githubProfile,
      },
    },
    { status: 200 }
  );
}
