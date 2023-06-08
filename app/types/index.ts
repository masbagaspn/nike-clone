export type CategoryType = {
  id: string;
  title: string;
  href: string;
  image: string;
};

export type ShoesType = {
  id: string;
  category_id: string;
  title: string;
  colors: string;
  price: number;
  images: string[];
};

export type TrendingType = {
  id: string;
  title: string;
  category: string;
  colors: string;
  price: number;
  images: string;
};

export type CarouselType = {
  id: string;
  desktop_image: string;
  mobile_image: string;
};
