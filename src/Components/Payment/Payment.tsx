import {CSSProperties, FC} from "react";

import { Button, Flex, Text, Divider, Icon } from "@chakra-ui/react"

import { styles } from "./PaymentStyles";
import { tPage } from "../../i18n/translator";
import { CartIcon } from "../../assets/svg";
import { usePaymentDataArray } from "../../Hooks/paymentDataArray";

export const Payment: FC = (): JSX.Element=> {
  const { paymentButton } = usePaymentDataArray()

  const bonus = 731;
  const priceOld = true;

  const renderButton = paymentButton.map((item, index) => {
    const showBonus = index === 0;

    return (
        <Button key={index} style={styles.button}>
          <Icon as={item.icon}/>
          {showBonus && <Text>{bonus}</Text>}
          <Text>{item.label}</Text>
        </Button>
      )
    }
  );


  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex style={styles.priceWrapper as CSSProperties}>
        {priceOld && <Flex style={styles.priceBlock as CSSProperties}>
          <Text>{tPage("info.oldPrice")}:</Text>
          <Flex style={styles.oldPriceWrapper as CSSProperties}>
            <Text style={styles.oldPrice}>649.<sup>32</sup> €</Text>
            <Flex style={styles.redLine as CSSProperties}></Flex>
          </Flex>
        </Flex>}
        <Text style={styles.newPrice(priceOld)}>499.<sup>20</sup> €</Text>
        <Text style={styles.vatText}>{tPage("info.vat")}
          <span style={styles.vatUnderline}>
            {tPage("info.vat2")}
          </span>
        </Text>
      </Flex>
      <Divider style={styles.divider}/>
      <Flex style={styles.shipWrapper as CSSProperties}>
        <Text style={styles.endingText}>( {tPage("info.only")} 7 {tPage("info.pcs")}. )</Text>
        <Text style={styles.shippingText}>{tPage("title.ready")}</Text>
        <Text >{tPage("title.weight")} 17.5 kg</Text>
      </Flex>
      <Divider style={styles.divider}/>
      <Button _hover={styles.cartButtonHover} style={styles.cartButton}>
        <CartIcon color="white"/>
        {tPage("button.cart")}
      </Button>
      <Flex style={styles.buttonWrapper as CSSProperties}>
        {renderButton}
      </Flex>
    </Flex>
  )
}