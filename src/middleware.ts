import WithAuth, { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// export default WithAuth(
//   function middleware(request: NextRequest) {
//     if (
//       request.nextUrl.pathname.startsWith("/api/auth/") ||
//       request.nextUrl.pathname.startsWith("/auth/")
//     ) {
//       return NextResponse.next();
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

export const config = { matcher: ["/dashboard"] };
