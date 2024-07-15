export type TProductItem = {
  image: string;
  title: string;
  productName: string;
};

export type TStoreItem = {
  title: string;
  index: number;
  link: string;
  totalProducts: number;
  totalClicks: number;
  id: number;
  products: TProductItem[];
};
