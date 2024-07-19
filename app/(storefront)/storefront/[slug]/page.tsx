import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import slugify from "slugify";
//
import { ContentItem } from "../../sections/storefront-list/sf-item/content-item";
import { getData } from "../../ssr-apis";

interface TPageProps {
  params: { slug: string };
}

const page = async ({ params }: TPageProps) => {
  const { slug } = params;
  const storefrontItem = (await getData())?.find(
    (i) => slugify(i.listName) === slug
  );

  if (!storefrontItem) {
    return notFound();
  }

  const { listName, products } = storefrontItem;

  return (
    <div className="flex flex-col gap-4 w-full">
      <Link
        href={"/"}
        className="flex items-center text-black text-base font-bold"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9999 18L15.4099 16.59L10.8299 12L15.4099 7.41L13.9999 6L7.99991 12L13.9999 18Z"
            fill="black"
          />
        </svg>
        Storefront
      </Link>
      <p className="m-0 text-lg font-bold text-black">{listName}</p>
      <div className="flex gap-5 max-w-full flex-wrap">
        {products.map((contentProps, index) => (
          <ContentItem key={index} {...contentProps} />
        ))}
      </div>
    </div>
  );
};

export default page;
