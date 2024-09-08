import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/auth/login", "/auth/register", "/auth/restore"];
const protectedRoutes = ["/dashboard", "/profile"];
const publicRoutes = ["/public"]; // Add other public routes if needed

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(session, "............session");
  // If there is a session and the user tries to access an auth path, redirect to dashboard
  if (session && authRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If there is no session and the user tries to access a protected route, redirect to login
  if (!session && protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If there is no session, allow access to public routes
  if (!session && publicRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }

  // If there is a session, allow access to private routes
  if (session && protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }
  return NextResponse.next();
}
