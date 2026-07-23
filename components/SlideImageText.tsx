"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SlideImageTextProps {
  src: string;
  alt: string;
  imageSide?: "left" | "right";
  aspect?: string;
  children: ReactNode;
}

export default function SlideImageText({
  src,
  alt,
  imageSide = "left",
  aspect = "aspect-[3/2]",
  children,
}: SlideImageTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imageFirst = imageSide === "left";

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, x: imageFirst ? -56 : 56 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={imageFirst ? "md:order-1" : "md:order-2"}
      >
        <div className={`relative ${aspect} w-full overflow-hidden rounded-[2rem] bg-beige shadow-card`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className={`pointer-events-none absolute -bottom-6 h-32 w-32 rounded-full border border-gold/25 ${
              imageFirst ? "-right-6" : "-left-6"
            }`}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: imageFirst ? 56 : -56 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={imageFirst ? "md:order-2" : "md:order-1"}
      >
        {children}
      </motion.div>
    </div>
  );
}
