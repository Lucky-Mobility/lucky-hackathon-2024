import { BASE_URL_API } from "@/configs/env.config";
import { get } from "@/services/fetcher";
import { StorefrontList } from "./sections/storefront-list";
import { TStoreItem } from "@/types/storefronts";

async function getData(){
  try {
    const res = await get(`${BASE_URL_API}/storefront/alejayofficial/lists`);
    if (!res) return;
    const data = await res.json();
    return data.lists as TStoreItem[];
  } catch (error) {
    return;
  }
}

export default async function Page(){
  const data = await getData();
  return <StorefrontList data={data} />
}