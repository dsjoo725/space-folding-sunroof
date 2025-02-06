export function GET() {
  return new Response(
    `User-agent: *
  Allow: /
  Sitemap: https://space-folding-sunroof.vercel.app/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
