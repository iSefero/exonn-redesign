// React
import { FC } from "react";

// Rating
import Rating from "react-rating";

// Common
import { StarEmpty, StarFull } from "../../assets/svg";

type Props = {
  value: number
}

export const CustomRating: FC<Props> = ({value}): JSX.Element => {
  return (
    // @ts-ignore
  <Rating
    readonly
    placeholderRating={value}
    emptySymbol={<StarEmpty/>}
    placeholderSymbol={<StarFull/>}
    fullSymbol={<StarFull/>}
  />
  )
}