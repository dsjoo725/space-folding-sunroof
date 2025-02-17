export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // 모든 크롤러에게 적용
        allow: "/", // 전체 경로에 대해 허용
      },
    ],
    sitemap: "https://www.space-folding-sunroof.com/sitemap.xml",
    host: "https://www.space-folding-sunroof.com",
  };
}
