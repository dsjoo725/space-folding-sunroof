"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = ["/img/vi1.jpg", "/img/vi2.jpg", "/img/vi3.jpg", "/img/vi4.jpg"];

export default function BgImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return images.map((image, i) => (
    <motion.div
      key={i}
      initial={{ opacity: i === index ? 1 : 0 }}
      animate={{ opacity: i === index ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <Image src={image} alt={`slide-${i}`} fill className="object-cover" priority />
    </motion.div>
  ));
}
