import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { Header } from "@/shared/ui/header";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "맞춤형 폴딩도어, 썬루프 시공 - 공간시스템 폴딩&썬루프",
  description: "최신 기술과 감각적 디자인으로 단열·목·글라스 폴딩도어, 오픈썬룸, 썬루프 시공 제공.",
  keywords: "폴딩도어, 단열폴딩도어, 시스템도어, 공간시스템, 썬루프",
  authors: [{ name: "공간시스템 폴딩&썬루프", url: "https://www.space-folding-sunroof.com" }],
  openGraph: {
    type: "website",
    url: "https://www.space-folding-sunroof.com",
    title: "맞춤형 폴딩도어, 썬루프 시공 - 공간시스템 폴딩&썬루프",
    description:
      "최신 기술과 감각적 디자인으로 단열·목·글라스 폴딩도어, 오픈썬룸, 썬루프 시공 제공.",
    siteName: "공간시스템 폴딩&썬루프",
    images: [
      {
        url: "https://www.space-folding-sunroof.com/img/vi1.jpg",
        width: 1200,
        height: 630,
        alt: "공간시스템 폴딩&썬루프 대표 이미지",
      },
    ],
  },
  metadataBase: new URL("https://www.space-folding-sunroof.com"),
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "공간시스템 폴딩&썬루프",
  url: "https://www.space-folding-sunroof.com",
  logo: "https://www.space-folding-sunroof.com/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+82-10-2407-9400",
      contactType: "customer service",
      availableLanguage: "Korean",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr">
      <head>
        <meta name="naver-site-verification" content="ee9f21578133329d81b6d640fbf062f8e885c0eb" />
        <link rel="canonical" href="https://www.space-folding-sunroof.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansKr.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
