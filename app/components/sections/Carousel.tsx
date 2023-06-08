"use client";

import React from "react";
import Image from "next/image";
import { HiOutlinePlus } from "react-icons/hi2";
import { motion } from "framer-motion";
import { CarouselType } from "@/app/types";

function Carousel({ data }: { data: CarouselType[] }) {
  return (
    <section className="w-full max-w-screen h-[90vh] max-h-[90vh]">
      <article className="w-full h-full flex justify-center items-center overflow-hidden">
        <motion.div className="w-full h-full">
          <Image
            src={data[0].mobile_image}
            alt="hero-image"
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-full object-left-top object-cover sm:hidden"
          />
          <Image
            src={data[0].desktop_image}
            alt="hero-image"
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-full object-left-top object-cover hidden sm:block"
          />
        </motion.div>
      </article>
    </section>
  );
}

export default Carousel;
