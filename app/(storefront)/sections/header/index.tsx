import React from "react";
import { BrandInfo } from "./brand-info";
import { InfluencerInfo } from "./influencer-info";

export const Header = () => {
  return (
    <header className="container">
      <BrandInfo />
      <InfluencerInfo />
    </header>
  );
};
