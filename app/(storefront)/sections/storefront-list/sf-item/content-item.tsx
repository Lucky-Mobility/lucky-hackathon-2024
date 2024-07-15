import Image from "next/image";
import {
  EContentTypes,
  IProduct,
  ISocialContent,
  TContentItem,
} from "../../types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ContentItem = (props: TContentItem) => {
  return (
    <div className="w-[148px] h-[262px] rounded bg-white shadow-[0_0_6px_0px_rgba(0,0,0,0.12)] overflow-hidden">
      {props.type === EContentTypes.Product ? (
        <ProductItem {...props} />
      ) : (
        <SocialContentItem {...props} />
      )}
    </div>
  );
};

const ProductItem = ({
  nearestAvailableStore,
  imageUrl,
  name,
  category,
  description,
  url,
}: IProduct) => {
  return (
    <Link href={url} target="_blank" className="cursor-pointer">
      <div
        className={cn(
          "w-full h-full relative px-2 pt-5 pb-3.5 flex flex-col items-center",
          !nearestAvailableStore && "pt-4"
        )}
      >
        {nearestAvailableStore ? (
          <p className="w-full absolute left-0 top-0 h-[20px] bg-black text-white text-[9px] font-bold text-center leading-[20px]">
            Available at {nearestAvailableStore} near you
          </p>
        ) : null}
        <Image
          width={89}
          height={89}
          src={imageUrl}
          alt={`image of product: ${imageUrl}`}
          objectFit="cover"
        />
        <p className="mt-2 mb-0 text-black text-[11px] font-normal text-center leading-[11.77px]">
          {category}
        </p>
        <p className="mt-2 mb-0 text-black text-[11px] font-bold text-center leading-[11.77px]">
          {name}
        </p>
        <p className="mt-3 text-black text-[9px] text-center line-clamp-3 leading-[11.77px]">
          {description}
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
