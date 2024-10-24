import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const nextAuthSessionToken = request.cookies.get(
    "next-auth.session-token"
  )?.value;

  // Nếu vào private path mà chưa đăng nhập thì sẽ redirect về trang login
  if (pathname !== "/auth" && !nextAuthSessionToken) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  // Nếu vào login path mà đã đăng nhập thì sẽ redirect về trang home
  if (pathname === "/auth" && nextAuthSessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
