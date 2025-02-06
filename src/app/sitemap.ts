export async function GET() {
  const baseUrl = "https://space-folding-sunroof.vercel.app"; // 도메인 설정

  // 주요 페이지 목록
  const pages = ["", "about", "products", "contact"]; // 필요에 맞게 수정

  // 사이트맵 XML 생성
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
