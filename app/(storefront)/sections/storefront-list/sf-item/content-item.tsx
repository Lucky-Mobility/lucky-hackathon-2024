import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TProduct } from "@/types/storefronts";
import { ISocialContent } from "../../types";

export const ContentItem = (props: TProduct) => {
  return (
    <div className="w-[148px] h-[262px] rounded bg-white shadow-[0_0_6px_0px_rgba(0,0,0,0.12)] overflow-hidden flex-shrink-0">
      {/* {props.type === EContentTypes.Product ? (
        <ProductItem {...props} />
      ) : (
        <SocialContentItem {...props} />
      )} */}
      <ProductItem {...props} />
    </div>
  );
};

const ProductItem = ({
  nearestAvailableRetailerStore,
  productImageUrl,
  productName,
  productDescription,
  productUrl,
}: TProduct) => {
  return (
    <Link href={productUrl} target="_blank" className="cursor-pointer">
      <div
        className={cn(
          "w-full h-full relative px-2 pt-5 pb-3.5 flex flex-col items-center",
          !nearestAvailableRetailerStore && "pt-4"
        )}
      >
        {nearestAvailableRetailerStore ? (
          <p className="w-full absolute left-0 top-0 h-[20px] bg-black text-white text-[9px] font-bold text-center leading-[20px]">
            Available at {nearestAvailableRetailerStore} near you
          </p>
        ) : null}
        <Image
          width={89}
          height={89}
          src={productImageUrl}
          alt={`image of product: ${productImageUrl}`}
          objectFit="cover"
        />
        {/* <p className='mt-2 mb-0 text-black text-[11px] font-normal text-center leading-[11.77px]'>
          'category'
        </p> */}
        <p className="mt-2 mb-0 text-black text-[11px] font-bold text-center leading-[11.77px]">
          {productName}
        </p>
        <p className="mt-3 text-black text-[9px] text-center line-clamp-3 leading-[11.77px]">
          {productDescription}
        </p>
        <Button
          variant="outline"
          className="absolute bottom-3.5 mx-auto mt-3 px-3 w-[80px] max-h-[24px] border border-solid border-black text-[11px] font-bold"
        >
          Shop now
        </Button>
      </div>
    </Link>
  );
};

const SocialContentItem = ({ contentUrl, name }: ISocialContent) => {
  return (
    <Link href={contentUrl} target="_blank">
      <video className="w-full h-full" src={contentUrl} controls />
    </Link>
  );
};
