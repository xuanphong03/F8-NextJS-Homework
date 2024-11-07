// import { NextResponse } from "next/server";
// import { getSession } from "@auth0/nextjs-auth0/edge";

// export async function middleware(request) {
//   // const response = new NextResponse();
//   const pathname = request.nextUrl.pathname;
//   const id = pathname.replace("/mindmap", "").replace("/", "");
//   const mindmapResponse = await fetch(
//     `${process.env.CLIENT_BASE_URL}/api/mindmap?id=${id}`
//   );
//   const mindmap = await mindmapResponse.json();
//   let mode = "private";
//   // const user = await getSession(request, response);
//   if (mindmap?.data?.public) {
//     mode = "public";
//   }
//   if (mode === "private") {
//     const user = await getSession();
//     if (!user) {
//       return NextResponse.redirect(new URL("/api/auth/login", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/mindmap/:id*"],
// };
// middleware.js
import {
  getSession,
  withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(request) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith("/mindmap")) {
    return response;
  }
  const id = pathname.replace("/mindmap", "").replace("/", "");
  const mindmapResponse = await fetch(
    `${process.env.CLIENT_BASE_URL}/api/mindmap?id=${id}`
  );
  const mindmap = await mindmapResponse.json();
  let mode = "private";

  if (mindmap?.data?.public) {
    mode = "public";
  }
  if (mode === "private") {
    const user = await getSession(request, response);
    if (!user) {
      return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }
  }

  return response;
});

export const config = {
  matcher: ["/", "/about", "/features", "/price", "/contact", "/mindmap/:id*"],
};
