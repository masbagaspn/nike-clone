import Carousel from "./components/sections/Carousel";
import Category from "./components/sections/Category";
import Trending from "./components/sections/Trending";

import data from "./data/data.json";

export default function Page() {
  const trending = data.trending.map((item) => {
    const shoes = data.shoes.find((shoe) => item.shoes_id === shoe.id)!;
    const category = data.categories.find(
      (cat) => shoes.category_id === cat.id
    )!;

    return {
      id: item.id,
      category: category.title,
      title: shoes.title,
      colors: shoes.colors,
      price: shoes.price,
      images: shoes.images[0],
    };
  });

  return (
    <div className="flex flex-col gap-4">
      <Carousel data={data.carousels} />
      <Trending data={trending} />
      <Category data={data.categories} />
    </div>
  );
}
