import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import { Header } from "./sections/header";

export const metadata: Metadata = {
  title: "Lucky Influencer's Storefront",
  description: "A storefront for Lucky Influencer's products",
};

export default function StoreFrontLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-[30px] py-5">{children}</main>
    </>
  );
}
