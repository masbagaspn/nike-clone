"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiBars3BottomRight,
  HiOutlineXMark,
  HiOutlineShoppingBag,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import Image from "next/image";

import data from "../../data/data.json";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 h-[8vh] w-full flex items-center justify-between py-2 px-4 md:hidden shadow-md bg-white z-40">
      <Image
        src="/assets/images/logo.webp"
        alt="logo"
        width={20}
        height={20}
        style={{ width: "auto", height: "auto" }}
      />
      <HiBars3BottomRight onClick={() => setIsMenuOpen(true)} size={20} />
      <AnimatePresence mode="wait">
        {isMenuOpen === true && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { when: "beforeChildren" } }}
            exit={{ opacity: 0, transition: { when: "afterChildren" } }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-neutral-900/20 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: "75%" }}
              animate={{ x: 0 }}
              exit={{ x: "75%" }}
              transition={{ stiffness: 0 }}
              className="w-3/4 h-full bg-white pt-6 pb-40 px-8 flex flex-col justify-between"
            >
              <div className="w-full flex flex-col gap-8">
                <div className="w-full flex justify-between">
                  <div className="w-5 h-5">
                    <Image
                      src="/assets/images/logo.webp"
                      alt="logo"
                      width={20}
                      height={20}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <HiOutlineXMark
                    onClick={() => setIsMenuOpen(false)}
                    size={20}
                  />
                </div>

                <ul className="text-lg font-medium flex flex-col gap-4 tracking-tight">
                  {data.categories.map(
                    (cat) =>
                      cat.title !== "All" && <li key={cat.id}>{cat.title}</li>
                  )}
                </ul>
              </div>

              <div className="w-full flex flex-col gap-4 tracking-tight border-t border-neutral-900/20 pt-8">
                <div className="flex items-center gap-4">
                  <HiOutlineShoppingBag size={20} />
                  <span className="text-sm font-medium">Shopping Cart</span>
                </div>
                <div className="flex items-center gap-4">
                  <HiOutlineQuestionMarkCircle size={20} />
                  <span className="text-sm font-medium">Help</span>
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
