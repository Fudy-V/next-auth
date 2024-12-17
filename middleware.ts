export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: ["/((?!api|signin|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
