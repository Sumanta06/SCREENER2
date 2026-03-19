export async function onRequest(context) {
  const request = context.request;
  const referer = request.headers.get("Referer") || "";

  // Agar koi bhi referer hai — allow karo (iframe se aaya hai)
  // Sirf completely empty referer block karo (direct URL type)
  if (referer.length > 0) {
    return context.next();
  }

  // Direct access — redirect to index
  return Response.redirect("https://screener-epd.pages.dev", 302);
}
