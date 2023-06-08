import Image from "next/image";
import React from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

import data from "../../data/data.json";

function DesktopHeader() {
  return (
    <header className="w-full h-[12.5vh] px-7 lg:px-8 bg-white hidden md:flex items-center z-30">
      <nav className="w-full flex justify-between items-center text-xs">
        <Image
          src="/assets/images/logo.webp"
          alt="logo"
          width={40}
          height={40}
          sizes="10vh"
          style={{ width: "auto", height: "auto" }}
          placeholder="blur"
          blurDataURL={"/assets/images/logo.webp"}
          className="w-auto h-full object-contain"
        />
        <ul className="flex gap-6">
          {data.categories.map((cat) => (
            <li
              key={cat.id}
              className="uppercase font-medium tracking-tight hover:opacity-75 cursor-pointer"
            >
              {cat.title === "All" ? "Shops" : cat.title}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <HiOutlineMagnifyingGlass size={16} />
          <HiOutlineUser size={16} />
          <HiOutlineShoppingBag size={16} />
        </div>
      </nav>
    </header>
  );
}

export default DesktopHeader;
