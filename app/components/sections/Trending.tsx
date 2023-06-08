"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

import { TrendingType } from "@/app/types";
import { useEffect, useRef, useState } from "react";

function Trending({ data }: { data: TrendingType[] }) {
  const carousel = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      const windowWidth = window.innerWidth;
      const padding = windowWidth < 768 ? 16 : windowWidth < 1024 ? 28 : 40;
      setLeft(
        carousel.current.scrollWidth - carousel.current.offsetWidth + padding
      );
    }
  }, []);
  return (
    <section className="min-h-fit w-full">
      <h2 className="text-xl font-semibold tracking-tight uppercase mb-4 ml-4 md:ml-7 lg:ml-10">
        Trending
      </h2>
      <motion.div
        ref={carousel}
        className="h-fit cursor-grab overflow-hidden px-4 md:px-7 lg:px-10"
      >
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -left }}
        >
          {data.map((item) => (
            <motion.div
              className="min-w-[60vmin] max-w-[60vmin] min-h-fit md:min-w-[32vmax] md:max-w-[32vmax] md:max-h-[48vmax] flex flex-col gap-4 overflow-hidden"
              key={item.id}
            >
              <Image
                src={item.images}
                alt={item.title!}
                width={500}
                height={500}
                className="object-cover object-center pointer-events-none"
              />
              <div className="flex flex-col justify-between">
                <div className="text-xs sm:text-sm">
                  <h3 className="text-sm uppercase font-semibold tracking-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="capitalize opacity-70">{item.colors}</p>
                  <p className="opacity-70">{`${item.category}'s Shoes`}</p>
                </div>
                <span className="text-sm mt-1 font-medium tracking-tight">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.price)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Trending;
