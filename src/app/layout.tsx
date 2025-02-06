import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        url: "https://space-folding-sunroof.vercel.app/og-image.jpg",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
