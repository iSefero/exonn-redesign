// React
import { CSSProperties, FC } from "react";

// Chakra
import { Box, Flex, Text } from "@chakra-ui/react";

// Common
import { CustomRating } from "../CustomRating/Rating";
import { ISpecification } from "../../types/types";
import { styles } from "./AboutProdcutStyle";
import { tPage } from "../../i18n/translator";

export const AboutProduct: FC<ISpecification> = ({data, specificRef}): JSX.Element => {
  const renderTechData = data.slice(0, 8).map((item, index) =>
      <Flex key={index} style={styles.item}>
        <Flex style={styles.itemDot}></Flex>
        <Text style={styles.itemText}>{item.label}: <span style={styles.itemData}>{item.data}</span></Text>
      </Flex>
    )

  const moveToSpecification = () => {
    if (specificRef.current) {
      specificRef.current.scrollIntoView({behavior: 'smooth'})
    }
  };

  return (
    <Box>
      <Text style={styles.title}>Scoter H10 eKFV</Text>
      <Flex style={styles.ratingWrapper}>
        <CustomRating value={4.6}/>
        <Flex style={styles.ratingBox}>4.6</Flex>
      </Flex>
      <Flex style={styles.contentWrapper as CSSProperties}>
        {renderTechData}
      </Flex>
      <Text onClick={moveToSpecification} style={styles.link}>{tPage("link.moreInfo")} {">"}</Text>
    </Box>
  )
}