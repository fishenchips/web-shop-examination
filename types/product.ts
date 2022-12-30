export interface PlatziProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: Array<Images>;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

type Images = string;
