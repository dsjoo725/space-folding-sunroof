import Image from "next/image";

const images = [
  "/img/catalog1.png",
  "/img/catalog2.png",
  "/img/catalog3.png",
  "/img/catalog4.png",
  "/img/catalog5.png",
  "/img/catalog6.png",
  "/img/catalog7.png",
];

export default function Catalog() {
  return images.map((image, i) => (
    <div key={i} className="relative w-full aspect-[2481/1754] bg-[#FFC706]">
      <Image
        src={image}
        alt={`catalog-${i}`}
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
        priority
      />
    </div>
  ));
}
