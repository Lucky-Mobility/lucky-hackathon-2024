export type TProduct = {
  id: string;
  createdTs: string;
  brandId: string;
  creatorId: string;
  productName: string;
  brandName: string;
  productUrl: string;
  affiliateLink: string;
  productImageUrl: string;
  productDescription: string;
  retailerName: string;
  nearestAvailableRetailerStore: string;
};

export type TStoreItem = {
  id: string;
  createdTs: string;
  listName: string;
  products: TProduct[];
};
