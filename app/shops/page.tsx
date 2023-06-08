"use client";
import { useRef, useState } from "react";
import data from "../data/data.json";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  HiOutlineChevronDown,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

function Shops() {
  const [sort, setSort] = useState({
    isOpen: false,
    selected: null,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const shoes = data.shoes.map((shoe) => {
    const category = data.categories.find(
      (cat) => cat.id === shoe.category_id
    )!;

    return {
      id: shoe.id,
      category: category.title,
      title: shoe.title,
      colors: shoe.colors,
      price: shoe.price,
      images: shoe.images[0],
    };
  });

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const fontSize = useTransform(scrollYProgress, [0, 0.05], ["1.5rem", "1rem"]);

  return (
    <section
      ref={headerRef}
      className="w-full relative min-h-[87.5vh] flex flex-col mt-1"
    >
      <motion.header className="sticky top-0 bg-white w-full h-[7.5vh] px-8 flex items-center justify-between z-20">
        <motion.h2
          style={{ fontSize: fontSize }}
          className="font-semibold tracking-tighter transition"
          transition={{ duration: 0.3 }}
        >
          Shops <span className="font-normal">({data.shoes.length})</span>
        </motion.h2>
        <div className="flex gap-12 tracking-tight">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex gap-1 items-center"
          >
            <span>{isFilterOpen ? "Hide" : "Show"} Filters</span>
            <motion.div>
              <HiOutlineAdjustmentsHorizontal />
            </motion.div>
          </button>
          <button
            onClick={() => setSort({ ...sort, isOpen: !sort.isOpen })}
            className="flex gap-1 items-center"
          >
            <span>Sort by</span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: sort.isOpen ? 180 : 0 }}
            >
              <HiOutlineChevronDown />
            </motion.div>
          </button>
        </div>
      </motion.header>
      <AnimatePresence mode="wait">
        <motion.div className="w-full flex p-8 gap-8 relative">
          {isFilterOpen && (
            <motion.aside
              initial={{ x: "-20vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-40vw" }}
              transition={{ duration: 0.5, layout: { duration: 0.5 } }}
              className="w-1/6 bg-white h-fit sticky top-[10vh]"
            >
              <div>
                <h3>Gender</h3>
              </div>
            </motion.aside>
          )}
          <motion.section
            layout
            className="flex flex-col gap-8"
            transition={{ layout: { duration: 0.5 } }}
          >
            <div className="w-full grid grid-cols-3 gap-8">
              {shoes.map((shoe) => (
                <article key={shoe.id} className="flex flex-col gap-2">
                  <Image
                    src={shoe.images}
                    alt={shoe.title}
                    width={500}
                    height={500}
                    className="w-full h-3/4 object-cover object-center"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="text-xs sm:text-sm">
                      <h3 className="text-sm uppercase font-semibold tracking-tight mb-0.5">
                        {shoe.title}
                      </h3>
                      <p className="capitalize opacity-70">{shoe.colors}</p>
                      <p className="opacity-70">{`${shoe.category}'s Shoes`}</p>
                    </div>
                    <span className="text-sm mt-1 font-medium tracking-tight">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(shoe.price)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Shops;
