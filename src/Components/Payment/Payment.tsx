import { CSSProperties } from "react";

import { Button, Flex, Input, Text, Progress, Divider } from "@chakra-ui/react"

import credit from "../../assets/images/credit.png"
import rechung from "../../assets/images/Rechnung.png"
import nachnahme from "../../assets/images/Nachnahme.png"
import vora from "../../assets/images/Vorauskasse.png"
import visa from "../../assets/images/Kartenzahlung.png"
import payPal from "../../assets/images/Paypal.png"
import pay from "../../assets/images/Googleapplepay.png"
import { styles } from "./PaymentStyles";
import { tPage } from "../../i18n/translator";

export const Payment = () => {

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Text style={styles.title}>SCOTEX H10 eKFV</Text>
      <Text style={styles.underTitle}>{tPage("title.product")} ESCH10</Text>
      <Text style={styles.ratingText as CSSProperties}>( 11 {tPage("title.review")} )</Text>
      <Progress value={86} colorScheme="cyan" height="10px"/>
      <Text style={styles.ratingText as CSSProperties}>{tPage("title.rating")} 86%</Text>
      <Text style={{paddingTop: "20px"}}>street-legal according to EKFV regulation for escooters </Text>
      <Text style={{paddingTop: "25px"}}>{tPage("title.weight")} 17.5 kg</Text>
      <Text style={styles.oldPrice}>649.00 €</Text>
      <Flex style={{gap: "10px"}}>
        <Text style={styles.newPrice}>
          499.00 €
        </Text>
        <Flex >
          <Input style={styles.input}/>
          <Button style={styles.button}>{tPage("button.toCart")}</Button>
        </Flex>
      </Flex>
      <Flex style={styles.shippingWrapper}>
        <Flex style={styles.shippingIcon}></Flex>
        <Text>{tPage("title.ready")}</Text>
      </Flex>
      <Divider/>
      <Flex style={styles.fundingWrapper as CSSProperties}>
        <Text style={styles.fundingText}>{tPage("title.funding")}</Text>
        <img style={styles.fundingImage as CSSProperties} alt="error" src={credit}/>
      </Flex>
      <Divider/>
      <Flex style={styles.methodsWrapper as CSSProperties}>
        <Text style={styles.methodsText}>{tPage("title.paymentMethod")}</Text>
        <Flex style={styles.imageBlock as CSSProperties}>
          <Flex style={{gap: "5px"}}>
            <img style={styles.methodsImage} alt="error" src={rechung}/>
            <img style={styles.methodsImage} alt="error" src={nachnahme}/>
            <img style={styles.methodsImage} alt="error" src={vora}/>
          </Flex>
          <Flex style={{gap: "5px"}}>
            <img style={styles.methodsImage} alt="error" src={visa}/>
            <img style={styles.methodsImage} alt="error" src={payPal}/>
            <img style={styles.methodsImage} alt="error" src={pay}/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}