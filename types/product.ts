export interface PlatziProduct {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: Array<Images>;
}

interface Category {
  id: number | string;
  name: string;
  image: string;
}

type Images = string;
