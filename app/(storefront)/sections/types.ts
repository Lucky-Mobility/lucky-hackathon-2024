import { Key } from "lucide-react";

export enum EContentTypes {
  SocialContent = "social",
  Product = "product",
}

export type IProduct = {
  name: string;
  url: string;
  category: string;
  description: string;
  imageUrl: string;
  nearestAvailableStore?: string;
};

export type ISocialContent = {
  name: string;
  platform: "tik-tok" | "instagram" | "youtube";
  thumbnailUrl: string;
  contentUrl: string;
  products: Array<IProduct>;
};

type ContentItemData = {
  [EContentTypes.SocialContent]: ISocialContent;
  [EContentTypes.Product]: IProduct;
};

export type ContentItemDataMapType<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
      } & M[Key] & {
          id: string;
        };
};

export type TContentItem =
  ContentItemDataMapType<ContentItemData>[keyof ContentItemDataMapType<ContentItemData>];
