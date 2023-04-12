import { CSSProperties, FC } from "react";

import { Divider, Image, Text, Flex, Button } from "@chakra-ui/react";

import { CartIcon } from "../../assets/svg";
import { tPage } from "../../i18n/translator";
import { styles } from "./ExtraCardStyle";

interface IProps {
  src: string,
  title: string,
  priceOld: string,
  priceNew: string,
  weight: string
}

export const ExtraCard: FC<IProps> = ({src,title,priceOld,priceNew,weight}) => {
  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Image alt="error" src={src}/>
      <Divider/>
      <Text>{title}</Text>
      <Flex style={styles.priceBlock}>
        <Text style={{textDecoration: "line-through"}}>{priceOld} €</Text>
        <Text>{priceNew} € *</Text>
        <Text>Weight {weight} kg</Text>
      </Flex>
      <Flex >
        <Button style={styles.buttonCart}>
          <CartIcon color="#afc410"/>
        </Button>
        <Button style={styles.buttonShow}>{tPage("button.moreInfo")}</Button>
      </Flex>
    </Flex>
  )
}