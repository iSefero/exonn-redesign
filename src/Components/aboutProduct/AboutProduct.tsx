// React
import { CSSProperties, FC } from "react";

// Chakra
import { Box, Flex, Text } from "@chakra-ui/react";

// Common
import { CustomRating } from "../CustomRating/Rating";
import { ISpecification } from "../../types/types";
import { styles } from "./AboutProdcutStyle";
import { tPage } from "../../i18n/translator";

export const AboutProduct: FC<ISpecification> = ({data}): JSX.Element => {
  const renderTechData = <Flex style={styles.contentWrapper as CSSProperties}>
    {data.slice(0, 8).map((item, index) =>
      <Flex key={index} style={styles.item}>
        <Flex style={styles.itemDot}></Flex>
        <Text style={styles.itemText}>{item.label}: <span style={styles.itemData}>{item.data}</span></Text>
      </Flex>
    )}
  </Flex>;

  const moveToSpecification = () => {
    const specificationElement = document.getElementById('specification');
    if (specificationElement) {
      specificationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <Text style={styles.title}>Scoter H10 eKFV</Text>
      <Flex style={styles.ratingWrapper}>
        <CustomRating value={4.6}/>
        <Flex style={styles.ratingBox}>4.6</Flex>
      </Flex>
      {renderTechData}
      <Text onClick={moveToSpecification} style={styles.link}>{tPage("link.moreInfo")} {">"}</Text>
    </Box>
  )
}