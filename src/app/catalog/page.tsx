import Catalog from "@/organism/catalog";
import Head from "next/head";

const catalogItems = [
  { src: "/img/catalog1.png", alt: "폴딩도어 SP-50G" },
  { src: "/img/catalog2.png", alt: "목마감 폴딩도어" },
  { src: "/img/catalog3.png", alt: "단열폴딩도어 SP-70S" },
  { src: "/img/catalog4.png", alt: "오픈썬룸 (Open Sunroom)" },
  { src: "/img/catalog5.png", alt: "썬룸 (Sunroom), 3연동 도어" },
  { src: "/img/catalog6.png", alt: "슬라이딩 (Sliding)" },
  { src: "/img/catalog7.png", alt: "여닫이 도어, 이동식 칸막이" },
];

export default function CatalogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: catalogItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.alt,
      image: `https://www.space-folding-sunroof.com${item.src}`,
    })),
  };

  return (
    <>
      <Head>
        <title>최신 폴딩도어 & 썬루프 제품 모음 - 공간시스템 폴딩&썬루프</title>
        <meta
          name="description"
          content="제품 정보를 한눈에 확인하고 싶다면? 다양한 폴딩도어 및 썬루프 제품을 만나보세요. 상세한 제품 설명과 혁신적인 솔루션을 한 번에, 쉽고 빠르게 확인할 수 있습니다."
        />
        <meta name="keywords" content="최신 폴딩도어 & 썬루프 제품 모음 - 공간시스템 폴딩&썬루프" />
        {/* Open Graph 태그 */}
        <meta
          property="og:title"
          content="최신 폴딩도어 & 썬루프 제품 모음 - 공간시스템 폴딩&썬루프"
        />
        <meta
          property="og:description"
          content="제품 정보를 한눈에 확인하고 싶다면? 다양한 폴딩도어 및 썬루프 제품을 만나보세요. 상세한 제품 설명과 혁신적인 솔루션을 한 번에, 쉽고 빠르게 확인할 수 있습니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.space-folding-sunroof.com/catalog" />
        <meta property="og:image" content="https://www.space-folding-sunroof.com/catalog1.png" />
        <link rel="canonical" href="https://www.space-folding-sunroof.com/catalog" />
        {/* 구조화 데이터 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section aria-label="최신 폴딩도어 & 썬루프 제품 모음">
        <h1 className="sr-only">최신 폴딩도어 & 썬루프 제품 모음</h1>
        <Catalog />
      </section>
    </>
  );
}
