import React from "react";

import data from "../../data/data.json";

function Footer() {
  return (
    <footer className="min-h-[10vh] w-full bg-neutral-900 text-neutral-100 px-4 py-8 flex flex-col gap-8 lg:px-10">
      <nav className="w-fit mb-4">
        <h2 className="text-sm font-semibold tracking-tight uppercase mb-2">
          Category
        </h2>
        <ul>
          {data.categories.map(
            (cat) =>
              cat.title !== "All" && (
                <li
                  className="text-sm font-light cursor-pointer hover:opacity-75"
                  key={cat.id}
                >
                  {cat.title}
                </li>
              )
          )}
        </ul>
      </nav>
      <div className="flex flex-col gap-2 pt-4 border-t border-neutral-100/30">
        <span className="w-fit text-sm font-semibold tracking-tight uppercase cursor-pointer hover:opacity-75">
          About Nike
        </span>
        <span className="w-fit text-sm font-semibold tracking-tight uppercase cursor-pointer hover:opacity-75">
          Get Help
        </span>
      </div>
      <span className="text-xs opacity-50">
        © 2023 Made by Mas Bagas Prasetio
      </span>
    </footer>
  );
}

export default Footer;
