export async function onRequest(context) {
  const request = context.request;
  const referer = request.headers.get("Referer") || "";

  // ✅ Allowed origins — jo index.html wale domains hain
  const ALLOWED_ORIGINS = [
    "https://screener-epd.pages.dev",
  ];

  const isAllowed = ALLOWED_ORIGINS.some(origin => referer.startsWith(origin));

  if (isAllowed) {
    return context.next();
  }

  // Direct access — redirect to index
  return Response.redirect("https://screener-epd.pages.dev", 302);
}
