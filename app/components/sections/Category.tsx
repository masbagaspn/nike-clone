import { CategoryType } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

interface CategoryListProps {
  data: CategoryType;
  className?: string;
}

export default function Category({ data }: { data: CategoryType[] }) {
  return (
    <section className="w-full max-w-full p-4 md:p-7 lg:p-10">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight uppercase">
          Category
        </h2>
        <ul className="w-full h-[50vmax] lg:h-[50vh] grid grid-rows-2 lg:grid-rows-none grid-cols-2 lg:grid-cols-3 gap-4 text-base overflow-hidden">
          {data.map((category, index) => (
            <CategoryList
              key={category.id}
              data={category}
              className={index === 0 ? "col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

const CategoryList: React.FC<CategoryListProps> = ({ data, className }) => {
  return (
    <li
      className={clsx(
        "group relative w-full overflow-hidden cursor-pointer",
        className
      )}
    >
      <Link href={data.href}>
        <Image
          src={data.image}
          alt="men-category"
          width={600}
          height={600}
          quality={100}
          className="w-full h-full object-bottom object-cover group-hover:scale-125 transition"
        />
        <span className="absolute h-full w-full flex gap-4 left-0 top-0 justify-center items-center text-xl font-bold uppercase text-neutral-100 bg-neutral-900/30 group-hover:bg-neutral-900/0 group-hover:text-neutral-900 transition">
          {data.title}
          <HiArrowUpRight size={20} />
        </span>
      </Link>
    </li>
  );
};
