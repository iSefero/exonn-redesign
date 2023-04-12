import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react"

import { specification } from "../../data/specificationData";
import { breakpointStyles, styles } from "./TabMenySpecificationStyles";
import { breakpoints } from "../../styles/variables/breakpoints";

export const TabMenuSpecification = () => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const renderContent = specification.map((item, index) => {
    const color = index % 2 === 0;
    return (
      <Flex key={index} style={styles.itemWrapper(color)}>
        <Text style={breakpointStyles[breakpoint].leftItem}>{item.label}</Text>
        <Text style={styles.rightItem}>{item.data}</Text>
      </Flex>
    )
  });

  return(
    <Box>
      {renderContent}
      <Text style={styles.text}>Далі заповнення таблиці у ручну не має сенсу</Text>
    </Box>
  )
}