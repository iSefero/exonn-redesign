import { tPage } from "../i18n/translator";

export const useFooterArray = () => {

  const serviceArray = [
    {label: tPage("service.contact")},
    {label: tPage("service.return")},
    {label: tPage("service.cart")},
    {label: tPage("service.account")},
    {label: tPage("service.wishList")},
    {label: tPage("service.myGift")},
    {label: tPage("service.publicGift")},
    {label: tPage("service.download")},
  ];

  const infoArray = [
    {label: tPage("information.battery")},
    {label: tPage("information.about")},
    {label: tPage("information.terms")},
    {label: tPage("information.privacy")},
    {label: tPage("information.shipping")},
    {label: tPage("information.withdrawal")},
    {label: tPage("information.order")},
    {label: tPage("information.credits")},
    {label: tPage("information.newsletter")},
  ];

  const categoriesArray = [
    {label: tPage("menu.models")},
    {label: tPage("menu.children")},
    {label: tPage("menu.used")},
    {label: tPage("menu.parts")},
    {label: tPage("menu.accessories")},
    {label: tPage("menu.packing")},
  ];


  return [serviceArray, infoArray, categoriesArray]
}