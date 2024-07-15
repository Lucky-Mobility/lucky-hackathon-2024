import React from "react";
import { storefrontList } from "../../sections/storefront-list/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ContentItem } from "../../sections/storefront-list/sf-item/content-item";

interface PageProps {
  children: React.ReactNode;
  params: { slug: string };
}

const page = ({ params }: PageProps) => {
  const { slug } = params;
  const storefrontItem = storefrontList.find((item) => item.slug === slug);

  if (!storefrontItem) {
    return notFound();
  }

  const { name, contents } = storefrontItem;

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
      <p className="m-0 text-lg font-bold text-black">{name}</p>
      <div className="flex gap-5 max-w-full flex-wrap">
        {contents.map((contentProps, index) => (
          <ContentItem key={index} {...contentProps} />
        ))}
      </div>
    </div>
  );
};

export default page;
