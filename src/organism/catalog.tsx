import Image from "next/image";

const catalogItems = [
  { src: "/img/catalog1.png", alt: "폴딩도어 SP-50G" },
  { src: "/img/catalog2.png", alt: "목마감 폴딩도어" },
  { src: "/img/catalog3.png", alt: "단열폴딩도어 SP-70S" },
  { src: "/img/catalog4.png", alt: "오픈썬룸 (Open Sunroom)" },
  { src: "/img/catalog5.png", alt: "썬룸 (Sunroom), 3연동 도어" },
  { src: "/img/catalog6.png", alt: "슬라이딩 (Sliding)" },
  { src: "/img/catalog7.png", alt: "여닫이 도어, 이동식 칸막이" },
];

export default function Catalog() {
  return catalogItems.map(({ src, alt }, index) => (
    <div key={index} className="relative w-full aspect-[2481/1754] bg-[#FFC706]">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
        loading="lazy"
      />
    </div>
  ));
}
