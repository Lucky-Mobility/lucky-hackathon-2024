import React from "react";
import { TContentItem } from "../../types";
import Link from "next/link";
import { TViewMode } from "../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ContentItem } from "./content-item";

export type SfItemProps = {
  name: string;
  contents: Array<TContentItem>;
  viewMode?: TViewMode;
  slug: string;
};

export const SfItem = ({
  name,
  contents,
  viewMode = "carousel",
  slug,
}: SfItemProps) => {
  if (viewMode === "grid") {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 text-black dark:text-white">
        <p className="m-0 font-bold text-base">{name}</p>
        <div className="actions flex items-center">
          <Link
            href={`/storefront/${slug}`}
            className="text-xs font-bold underline"
          >
            View all
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4 pb-2 px-2">
          {contents.map((cItem, index) => (
            <CarouselItem
              key={index}
              className={`pl-4 basis-[${100 / contents.length}px]`}
            >
              <ContentItem {...cItem} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          iconClassName="text-black h-8 w-8"
          className="hidden sm:block"
        />
        <CarouselNext
          variant="ghost"
          iconClassName="text-black h-8 w-8"
          className="hidden sm:block"
        />
      </Carousel>
    </div>
  );
};
