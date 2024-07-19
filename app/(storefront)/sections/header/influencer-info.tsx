import React, { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { get } from "@/services/fetcher";
import { BASE_URL_API } from "@/configs/env.config";
import { TInfluencer } from "@/types/influencer";

async function getDataInfluencer() {
  try {
    const res = await get(`${BASE_URL_API}/storefront/alejayofficial`);
    if (!res) return;
    const data = await res.json();
    return data as TInfluencer;
  } catch (error) {
    return;
  }
}

export async function InfluencerInfo() {
  const data = await getDataInfluencer();

  const socialNetworkIcons = Object.entries(
    data?.brandCreator.socialMediaLinks || {}
  ).map((item) => {
    if (item[0].indexOf("Url") === -1) return null;
    let type = "facebook" as SocialNetworkIconProps["type"];

    if (item[0].indexOf("facebook") >= 0) {
      type = "facebook";
    } else if (item[0].indexOf("instagram") >= 0) {
      type = "instagram";
    } else if (item[0].indexOf("tiktok") >= 0) {
      type = "tik-tok";
    } else if (item[0].indexOf("youtube") >= 0) {
      type = "youtube";
    } else if (item[0].indexOf("pinterest") >= 0) {
      type = "pinterest";
    }

    return <SocialNetworkIcon key={type} type={type} link={item[1]} />;
  });
  return (
    <div className="h-[78px] sm:h-[58px] px-4 sm:px-8 bg-black flex justify-between items-center">
      <div className="channel-info flex items-center gap-[10px]">
        <Avatar className="w-[44px] h-[44px] sm:w-[72px] sm:h-[72px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white text-base font-bold">
            {data?.creatorUsername}
          </p>
          <p className="text-[#A6A6A6] text-xs hidden sm:flex items-center gap-[3px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.54167 12.8333C3.44808 12.8333 1.75 11.1358 1.75 9.04167C1.75 6.9475 3.44808 5.25 5.54167 5.25C7.63583 5.25 9.33333 6.9475 9.33333 9.04167C9.33333 11.1358 7.63583 12.8333 5.54167 12.8333Z"
                stroke="currentColor"
                strokeWidth="0.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.90991 8.40968L5.54166 7.77734V10.3055"
                stroke="currentColor"
                strokeWidth="0.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.91168 10.3075H6.17168"
                stroke="currentColor"
                strokeWidth="0.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.75067 5.33398C5.11467 3.62015 6.636 2.33331 8.45834 2.33331C10.5525 2.33331 12.25 4.03081 12.25 6.12498C12.25 7.9479 10.9638 9.46865 9.24934 9.83265"
                stroke="currentColor"
                strokeWidth="0.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Earns Commission
          </p>
          <div className="social-networks flex mt-1.5 sm:hidden gap-2 sm:items-center">
            {socialNetworkIcons}
          </div>
        </div>
      </div>

      <div className="social-networks hidden sm:flex sm:gap-4 sm:items-center">
        {socialNetworkIcons}
      </div>
    </div>
  );
}

type SocialNetworkIconProps = {
  type: "facebook" | "instagram" | "pinterest" | "tik-tok" | "youtube";
  link: string;
};
const SocialNetworkIcon = ({ type, link }: SocialNetworkIconProps) => {
  return (
    <a href={link} target="_blank">
      {SocialIcon[type]}
    </a>
  );
};

const SocialIcon: Record<SocialNetworkIconProps["type"], ReactNode> = {
  facebook: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 11.9999C22 6.47994 17.52 1.99994 12 1.99994C6.48 1.99994 2 6.47994 2 11.9999C2 16.8399 5.44 20.8699 10 21.7999V14.9999H8V11.9999H10V9.49994C10 7.56994 11.57 5.99994 13.5 5.99994H16V8.99994H14C13.45 8.99994 13 9.44994 13 9.99994V11.9999H16V14.9999H13V21.9499C18.05 21.4499 22 17.1899 22 11.9999Z"
        fill="white"
      />
    </svg>
  ),
  instagram: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.8 1.99994H16.2C19.4 1.99994 22 4.59994 22 7.79994V16.1999C22 17.7382 21.3889 19.2134 20.3012 20.3012C19.2135 21.3889 17.7383 21.9999 16.2 21.9999H7.8C4.6 21.9999 2 19.3999 2 16.1999V7.79994C2 6.26168 2.61107 4.78643 3.69878 3.69872C4.78649 2.61101 6.26174 1.99994 7.8 1.99994ZM7.6 3.99994C6.64522 3.99994 5.72955 4.37922 5.05442 5.05435C4.37928 5.72949 4 6.64516 4 7.59994V16.3999C4 18.3899 5.61 19.9999 7.6 19.9999H16.4C17.3548 19.9999 18.2705 19.6207 18.9456 18.9455C19.6207 18.2704 20 17.3547 20 16.3999V7.59994C20 5.60994 18.39 3.99994 16.4 3.99994H7.6ZM17.25 5.49994C17.5815 5.49994 17.8995 5.63163 18.1339 5.86606C18.3683 6.10048 18.5 6.41842 18.5 6.74994C18.5 7.08146 18.3683 7.3994 18.1339 7.63382C17.8995 7.86824 17.5815 7.99994 17.25 7.99994C16.9185 7.99994 16.6005 7.86824 16.3661 7.63382C16.1317 7.3994 16 7.08146 16 6.74994C16 6.41842 16.1317 6.10048 16.3661 5.86606C16.6005 5.63163 16.9185 5.49994 17.25 5.49994ZM12 6.99994C13.3261 6.99994 14.5979 7.52672 15.5355 8.46441C16.4732 9.40209 17 10.6739 17 11.9999C17 13.326 16.4732 14.5978 15.5355 15.5355C14.5979 16.4732 13.3261 16.9999 12 16.9999C10.6739 16.9999 9.40215 16.4732 8.46447 15.5355C7.52678 14.5978 7 13.326 7 11.9999C7 10.6739 7.52678 9.40209 8.46447 8.46441C9.40215 7.52672 10.6739 6.99994 12 6.99994ZM12 8.99994C11.2044 8.99994 10.4413 9.31601 9.87868 9.87862C9.31607 10.4412 9 11.2043 9 11.9999C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 14.9999 12 14.9999C12.7956 14.9999 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 11.9999C15 11.2043 14.6839 10.4412 14.1213 9.87862C13.5587 9.31601 12.7956 8.99994 12 8.99994Z"
        fill="white"
      />
    </svg>
  ),
  pinterest: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14299_1617)">
        <path
          d="M12.0169 0C5.39593 0 0.0289307 5.367 0.0289307 11.987C0.0289307 17.066 3.18693 21.404 7.64693 23.149C7.54193 22.2 7.44793 20.746 7.68793 19.71C7.90693 18.773 9.09393 13.753 9.09393 13.753C9.09393 13.753 8.73493 13.033 8.73493 11.972C8.73493 10.309 9.70193 9.061 10.9029 9.061C11.9269 9.061 12.4209 9.83 12.4209 10.749C12.4209 11.778 11.7679 13.316 11.4289 14.741C11.1439 15.934 12.0289 16.906 13.2039 16.906C15.3319 16.906 16.9719 14.661 16.9719 11.419C16.9719 8.558 14.9089 6.55 11.9639 6.55C8.55393 6.55 6.55493 9.112 6.55493 11.749C6.55493 12.782 6.94893 13.892 7.44393 14.49C7.54293 14.61 7.55593 14.715 7.52893 14.835C7.43893 15.21 7.23593 16.034 7.19493 16.198C7.14193 16.423 7.02293 16.469 6.79393 16.363C5.29893 15.673 4.36093 13.485 4.36093 11.717C4.36093 7.941 7.10893 4.465 12.2809 4.465C16.4389 4.465 19.6729 7.432 19.6729 11.388C19.6729 15.523 17.0659 18.85 13.4399 18.85C12.2259 18.85 11.0859 18.221 10.6819 17.471L9.93293 20.319C9.66393 21.364 8.92893 22.671 8.43493 23.465C9.55793 23.81 10.7409 24 11.9849 24C18.5919 24 23.9699 18.635 23.9699 12.013C23.9699 5.39 18.5919 0.026 11.9849 0.026L12.0169 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_14299_1617">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  "tik-tok": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7112 5.09873C17.572 5.02678 17.4365 4.94791 17.3052 4.8624C16.9233 4.60994 16.5732 4.31247 16.2623 3.97639C15.4846 3.08651 15.1941 2.18373 15.0871 1.55166H15.0914C15.002 1.02701 15.039 0.687561 15.0446 0.687561H11.5022V14.3851C11.5022 14.569 11.5022 14.7508 11.4945 14.9304C11.4945 14.9528 11.4924 14.9734 11.4911 14.9974C11.4911 15.0073 11.4911 15.0176 11.4889 15.028V15.0357C11.4516 15.5272 11.294 16.0019 11.0301 16.4182C10.7663 16.8345 10.4041 17.1796 9.97556 17.423C9.52892 17.6771 9.02376 17.8104 8.5099 17.8097C6.85947 17.8097 5.52185 16.464 5.52185 14.8019C5.52185 13.1399 6.85947 11.7941 8.5099 11.7941C8.82232 11.7938 9.13281 11.843 9.42986 11.9398L9.43415 8.33299C8.5324 8.21651 7.61628 8.28817 6.74361 8.54347C5.87094 8.79876 5.06064 9.23214 4.36384 9.81627C3.75328 10.3468 3.23999 10.9797 2.84705 11.6867C2.69751 11.9445 2.13333 12.9805 2.06501 14.6619C2.02205 15.6162 2.30865 16.6049 2.44529 17.0135V17.0221C2.53122 17.2628 2.86423 18.0839 3.40693 18.7761C3.84454 19.3314 4.36156 19.8192 4.94134 20.2237V20.2151L4.94994 20.2237C6.66482 21.389 8.56619 21.3126 8.56619 21.3126C8.89533 21.2992 9.9979 21.3126 11.25 20.7192C12.6388 20.0613 13.4294 19.0812 13.4294 19.0812C13.9345 18.4956 14.3361 17.8282 14.617 17.1076C14.9376 16.265 15.0446 15.2544 15.0446 14.8505V7.58362C15.0876 7.6094 15.6599 7.98795 15.6599 7.98795C15.6599 7.98795 16.4845 8.51647 17.771 8.86065C18.6939 9.10557 19.9374 9.15713 19.9374 9.15713V5.64057C19.5017 5.68783 18.617 5.55033 17.7112 5.09873Z"
        fill="white"
      />
    </svg>
  ),
  youtube: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
        fill="white"
      />
    </svg>
  ),
};
