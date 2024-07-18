export type TSocialMediaLink = {
  facebookProfileUrl: string;
  instagramProfileUrl: string;
  tiktokProfileUrl: string;
  youtubeProfileUrl: string;
};

export type TBrandCreator = {
  id: string;
  createdTs: string;
  brandId: string;
  creatorName: string;
  creatorUsername: string;
  socialMediaLinks: TSocialMediaLink;
};

export type TInfluencer = {
  id: string;
  createdTs: string;
  creatorId: string;
  brandId: string;
  brandCreator: TBrandCreator;
  creatorUsername: string;
  brandName: string;
  storeName: string;
  storeUrl: string;
};
