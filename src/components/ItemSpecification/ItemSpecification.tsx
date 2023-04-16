// React
import {FC} from "react";

// Chakra
import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react"

// Common
import { specification } from "../../data/specificationData";
import { breakpointStyles, styles } from "./ItemSpecificationStyles";
import { breakpoints } from "../../styles/variables/breakpoints";

export const ItemSpecification: FC = (): JSX.Element => {
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
    <Box >
      {renderContent}
    </Box>
  )
}