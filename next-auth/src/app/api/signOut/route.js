import { signOut } from "next-auth/react";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  cookies().delete("google-provider");
  cookies().delete("github-provider");

  return NextResponse.json({ status: 200 });
}
