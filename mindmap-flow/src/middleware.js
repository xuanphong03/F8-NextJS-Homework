import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export async function middleware(request) {
  const response = new NextResponse();
  const pathname = request.nextUrl.pathname;
  const id = pathname.replace("/mindmap", "").replace("/", "");
  const mindmapResponse = await fetch(
    `${process.env.CLIENT_BASE_URL}/api/mindmap?id=${id}`
  );
  const mindmapData = await mindmapResponse.json();
  const user = await getSession(request, response);

  let mode = "private";
  if (mindmapData?.data?.public) {
    mode = "public";
  }
  if (mode === "private") {
    if (!user) {
      return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mindmap/:id"],
};
