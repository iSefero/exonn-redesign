import { tPage } from "../i18n/translator";

export const useItemArray = () => {

  const itemArray = [
    {label: tPage("item.compare")},
    {label: tPage("item.recommend")},
    {label: tPage("item.listmania")},
    {label: tPage("item.addWishList")},
    {label: tPage("item.addWishList")},
    {label: tPage("item.giftRegistry")}
  ];

  return [itemArray]
};