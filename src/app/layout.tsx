import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { Header } from "@/shared/ui/header";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // 사용할 폰트 두께 선택
});

export const metadata: Metadata = {
  title: "공간시스템 폴딩&썬루프 | 폴딩도어 & 썬루프 전문 시공",
  description: "자체 제작부터 시공, AS까지! 최고의 품질과 서비스로 고객 만족을 드립니다.",
  keywords: "폴딩도어, 단열폴딩도어, 시스템도어, 공간시스템, 썬루프",
  authors: [{ name: "공간시스템 폴딩&썬루프", url: "https://space-folding-sunroof.vercel.app" }],
  openGraph: {
    type: "website",
    url: "https://space-folding-sunroof.vercel.app",
    title: "공간시스템 폴딩&썬루프 | 폴딩도어 & 썬루프 전문 시공",
    description: "자체 제작부터 시공, AS까지! 최고의 품질과 서비스로 고객 만족을 드립니다.",
    siteName: "공간시스템 폴딩&썬루프",
    images: [
      {
        url: "https://space-folding-sunroof.vercel.app/img/vi1.jpg",
        width: 1200,
        height: 630,
        alt: "공간시스템 폴딩&썬루프 대표 이미지",
      },
    ],
  },
  metadataBase: new URL("https://space-folding-sunroof.vercel.app"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "공간시스템 폴딩&썬루프",
  url: "https://space-folding-sunroof.vercel.app",
  logo: "https://space-folding-sunroof.vercel.app/logo.png",
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
