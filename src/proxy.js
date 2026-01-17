import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const auth = request.cookies.get("auth")?.value;
  // if not logged in
  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // if logged in
  return NextResponse.next();
}

export const config = {
  matcher: "/cart",
};
