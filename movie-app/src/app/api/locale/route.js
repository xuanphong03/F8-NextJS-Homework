import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const locale = cookies().get("locale")?.value || "vi";
  return NextResponse.json({ status: 200, locale });
}

export async function POST(request) {
  const { locale } = await request.json();
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set({
    name: "locale",
    value: locale,
    httpOnly: true,
    secure: true,
    path: "/",
    expires: Date.now() + oneDay,
  });
  return NextResponse.json({ status: 200 });
}
