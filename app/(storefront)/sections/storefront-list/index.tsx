import { storefrontList } from "./data";
import { SfItem } from "./sf-item";

export const StorefrontList = () => {
  return (
    <div className="flex flex-col gap-7">
      {storefrontList
        .filter((i) => i.contents.length)
        .map((sfItemProps) => (
          <SfItem key={sfItemProps.name} {...sfItemProps} />
        ))}
    </div>
  );
};
