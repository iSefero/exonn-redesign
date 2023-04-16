import { Bonus, Compare, Favorite, GPS } from "../assets/svg";
import { tPage } from "../i18n/translator";

export const usePaymentDataArray = () => {
  const paymentButton = [
    {
      icon: Bonus,
      label: tPage("button.bonusPoints")
    },
    {
      icon: GPS,
      label: tPage("button.check")
    },
    {
      icon: Favorite,
      label: tPage("button.addFavorite")
    },
    {
      icon: Compare,
      label: tPage("button.compare")
    },
  ]

  return { paymentButton }
}

