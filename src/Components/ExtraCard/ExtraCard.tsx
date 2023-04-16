// React
import { CSSProperties, FC } from "react";

// Chakra
import { Image, Text, Flex } from "@chakra-ui/react";

// Common
import { tPage } from "../../i18n/translator";
import { styles } from "./ExtraCardStyle";
import { CustomRating } from "../CustomRating/Rating";
import { IExtraCard } from "../../types/types";

export const ExtraCard: FC<IExtraCard> = ({src,title,priceOld,price, rating,available}): JSX.Element => {
  const beforeDot = (str: string) => str.split(".")[0]
  const afterDot = (str: string) => str.split(".")[1]

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Image style={styles.image as CSSProperties} alt="error" src={src}/>
      <CustomRating value={rating}/>
      <Text style={styles.title}>{title}</Text>
      {priceOld && <Flex style={styles.priceBlock as CSSProperties}>
        <Text>{tPage("info.oldPrice")}:</Text>
        <Flex style={styles.oldPriceWrapper as CSSProperties}>
          <Text style={styles.oldPrice}>{beforeDot(priceOld)}.<sup>{afterDot(priceOld)}</sup> €</Text>
          <Flex style={styles.redLine as CSSProperties}></Flex>
        </Flex>
      </Flex>}
      <Text style={styles.price(priceOld)}>{beforeDot(price)}.<sup>{afterDot(price)}</sup> €</Text>
      <Text style={styles.available as CSSProperties}>{available ? tPage("info.readyToShip") : tPage("info.comingSoon")}</Text>
    </Flex>
  )
}