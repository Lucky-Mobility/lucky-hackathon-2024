import { StorefrontList } from "./sections/storefront-list";
import { getData } from "./ssr-apis";


export default async function Page(){
  const data = await getData();
  return <StorefrontList data={data} />
}