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
  const googleProvider = cookies().get("google-provider")?.value;
  const githubProvider = cookies().get("github-provider")?.value;
  const providers = [];
  if (googleProvider) {
    providers.push(googleProvider);
  }
  if (githubProvider) {
    providers.push(githubProvider);
  }
  return NextResponse.json(
    {
      success: {
        profile: { ...session },
        providers,
      },
    },
    { status: 200 }
  );
}
