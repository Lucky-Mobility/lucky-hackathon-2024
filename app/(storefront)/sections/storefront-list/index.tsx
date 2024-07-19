"use client";

import { Fragment, ReactNode, useState } from "react";
import { LayoutGrid } from "lucide-react";

import { cn } from "@/lib/utils";

import { storefrontList } from "./data";
import { SfItem } from "./sf-item";
import { TViewMode } from "./types";
import { TStoreItem } from "@/types/storefronts";

export const StorefrontList = ({ data = [] }: { data?: TStoreItem[] }) => {
  const [viewMode, setVieMode] = useState<TViewMode>("carousel");
  const handleChangeViewMode = () => {
    setVieMode((prev) => (prev === "carousel" ? "grid" : "carousel"));
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="m-0 text-[22px] text-black font-bold">All Lists</p>
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={handleChangeViewMode}
        >
          {headingActionCfg[viewMode].icon}
          <span className="text-sm font-bold">
            {headingActionCfg[viewMode].label}
          </span>
        </div>
      </div>
      <div className="w-full h-px mt-8 mb-6 bg-[#CDCDCD]" />
      <div
        className={cn(
          "flex",
          viewMode === "carousel"
            ? "flex-col gap-7"
            : "gap-4 items-center flex-wrap"
        )}
      >
        {data
          .filter((i) => i.products.length)
          .map((sfItemProps, idx) => (
            <Fragment key={idx}>
              <SfItem {...sfItemProps} viewMode={viewMode} />
              {viewMode === "carousel" && idx !== storefrontList.length - 1 ? (
                <div className="w-full h-px bg-[#CDCDCD] my-7" />
              ) : null}
            </Fragment>
          ))}
      </div>
    </>
  );
};

const headingActionCfg: Record<TViewMode, { icon: ReactNode; label: string }> =
  {
    carousel: {
      icon: (
        <LayoutGrid color="black" fill="black" className="h-[21px] w-[21px]" />
      ),
      label: "View grid",
    },
    grid: {
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.59376 3.59364C8.32027 3.86713 8.16663 4.23806 8.16663 4.62484V7.5415C8.16663 7.92828 8.32027 8.29921 8.59376 8.5727C8.86725 8.84619 9.23819 8.99984 9.62496 8.99984H11.375C11.7617 8.99984 12.1327 8.84619 12.4062 8.5727C12.6796 8.29921 12.8333 7.92828 12.8333 7.5415V4.62484C12.8333 4.23806 12.6796 3.86713 12.4062 3.59364C12.1327 3.32015 11.7617 3.1665 11.375 3.1665H9.62496C9.23819 3.1665 8.86725 3.32015 8.59376 3.59364Z"
            fill="black"
          />
          <path
            d="M8.59376 14.0936C8.32027 14.3671 8.16663 14.7381 8.16663 15.1248V18.0415C8.16663 18.4283 8.32027 18.7992 8.59376 19.0727C8.86725 19.3462 9.23819 19.4998 9.62496 19.4998H11.375C11.7617 19.4998 12.1327 19.3462 12.4062 19.0727C12.6796 18.7992 12.8333 18.4283 12.8333 18.0415V15.1248C12.8333 14.7381 12.6796 14.3671 12.4062 14.0936C12.1327 13.8201 11.7617 13.6665 11.375 13.6665H9.62496C9.23819 13.6665 8.86725 13.8201 8.59376 14.0936Z"
            fill="black"
          />
          <path
            d="M0.427136 3.59364C0.153645 3.86713 0 4.23806 0 4.62484V7.5415C0 7.92828 0.153645 8.29921 0.427136 8.5727C0.700626 8.84619 1.07156 8.99984 1.45833 8.99984H3.20833C3.59511 8.99984 3.96604 8.84619 4.23953 8.5727C4.51302 8.29921 4.66667 7.92828 4.66667 7.5415V4.62484C4.66667 4.23806 4.51302 3.86713 4.23953 3.59364C3.96604 3.32015 3.59511 3.1665 3.20833 3.1665H1.45833C1.07156 3.1665 0.700626 3.32015 0.427136 3.59364Z"
            fill="black"
          />
          <path
            d="M0.427136 14.0936C0.153645 14.3671 0 14.7381 0 15.1248V18.0415C0 18.4283 0.153645 18.7992 0.427136 19.0727C0.700626 19.3462 1.07156 19.4998 1.45833 19.4998H3.20833C3.59511 19.4998 3.96604 19.3462 4.23953 19.0727C4.51302 18.7992 4.66667 18.4283 4.66667 18.0415V15.1248C4.66667 14.7381 4.51302 14.3671 4.23953 14.0936C3.96604 13.8201 3.59511 13.6665 3.20833 13.6665H1.45833C1.07156 13.6665 0.700626 13.8201 0.427136 14.0936Z"
            fill="black"
          />
          <path
            d="M16.7605 3.59364C16.487 3.86713 16.3334 4.23806 16.3334 4.62484V7.5415C16.3334 7.92828 16.487 8.29921 16.7605 8.5727C17.034 8.84619 17.4049 8.99984 17.7917 8.99984H19.5417C19.9285 8.99984 20.2994 8.84619 20.5729 8.5727C20.8464 8.29921 21 7.92828 21 7.5415V4.62484C21 4.23806 20.8464 3.86713 20.5729 3.59364C20.2994 3.32015 19.9285 3.1665 19.5417 3.1665H17.7917C17.4049 3.1665 17.034 3.32015 16.7605 3.59364Z"
            fill="black"
          />
          <path
            d="M16.7605 14.0936C16.487 14.3671 16.3334 14.7381 16.3334 15.1248V18.0415C16.3334 18.4283 16.487 18.7992 16.7605 19.0727C17.034 19.3462 17.4049 19.4998 17.7917 19.4998H19.5417C19.9285 19.4998 20.2994 19.3462 20.5729 19.0727C20.8464 18.7992 21 18.4283 21 18.0415V15.1248C21 14.7381 20.8464 14.3671 20.5729 14.0936C20.2994 13.8201 19.9285 13.6665 19.5417 13.6665H17.7917C17.4049 13.6665 17.034 13.8201 16.7605 14.0936Z"
            fill="black"
          />
          <line
            x1="7.6495e-08"
            y1="1.125"
            x2="21"
            y2="1.125"
            stroke="black"
            strokeWidth="1.75"
          />
          <line
            x1="7.6495e-08"
            y1="11.625"
            x2="21"
            y2="11.625"
            stroke="black"
            strokeWidth="1.75"
          />
        </svg>
      ),
      label: "View carousel",
    },
  };
