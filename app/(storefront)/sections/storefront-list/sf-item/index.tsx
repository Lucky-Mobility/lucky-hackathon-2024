import Link from "next/link";
import slugify from "slugify";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { TViewMode } from "../types";
import { ContentItem } from "./content-item";
import { TStoreItem } from "@/types/storefronts";

export type SfItemProps = TStoreItem & { viewMode: TViewMode };

export const SfItem = (props: TStoreItem & { viewMode: TViewMode }) => {
  const { listName, products, viewMode = "carousel", id } = props;
  if (viewMode === "grid") {
    return <GridItem {...props} />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 text-black dark:text-white">
        <p className="m-0 font-bold text-base">{listName}</p>
        <div className="actions flex items-center">
          <Link
            href={`/storefront/${slugify(listName)}`}
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
          {products.map((cItem, index) => (
            <CarouselItem
              key={index}
              className={`pl-4 basis-[${100 / products.length}px]`}
            >
              <ContentItem {...cItem} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          iconClassName="text-black h-8 w-8"
          className="hidden sm:block"
          color="black"
        />
        <CarouselNext
          variant="ghost"
          iconClassName="text-black h-8 w-8"
          className="hidden sm:block"
          color="black"
        />
      </Carousel>
    </div>
  );
};

const GridItem = (props: TStoreItem & { viewMode: TViewMode }) => {
  const { products, id, listName } = props;
  const threeFirstProds = products.slice(0, 3);

  const remainingProdLength = products.length - threeFirstProds.length;

  return (
    <Link href={`/storefront/${slugify(listName)}`}>
      <div className="w-[332px] h-[205px] flex-shrink-0 rounded bg-white flex flex-col items-center justify-center gap-4 shadow-[0_0_16px_0px_rgba(0,0,0,0.12)]">
        <div className="flex justify-between items-center">
          {threeFirstProds.map((c, index) => {
            // const imageUrl =
            //   c.type === EContentTypes.Product
            //     ? (c as IProduct).imageUrl
            //     : (c as ISocialContent).thumbnailUrl;
            const imageUrl = c.productImageUrl;
            const isLatestItem = index === threeFirstProds.length - 1;
            return (
              <div
                key={index}
                className={cn(
                  "w-[93px] h-[88px] rounded-md grid place-items-center relative overflow-hidden",
                  isLatestItem &&
                    remainingProdLength &&
                    "before:content-[''] before:w-full before:h-full before:absolute before:left-0 before:bg-gradient-to-r before:from-gray-900 before:to-gray-900 before:opacity-60 before:bg-cover before:bg-center before:bg-no-repeat"
                )}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              >
                {isLatestItem && remainingProdLength ? (
                  <span className="text-white text-lg font-bold z-10">
                    {remainingProdLength}+
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="w-full text-center text-xl text-black font-bold">
          {listName}
        </p>
        <p className="w-full text-center text-xs text-black">{`${
          products.length
        } product${products.length > 1 ? "s" : ""}`}</p>
      </div>
    </Link>
  );
};
