export interface PlatziProduct {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: Category;
  images?: Array<Image>;
}

interface Category {
  id?: number;
  name?: string;
  image?: string;
}

type Image = string;

export interface CartProduct extends PlatziProduct {
  amount?: number;
  image?: string;
}
