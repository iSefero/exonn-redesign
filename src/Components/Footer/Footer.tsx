// React
import { CSSProperties, FC } from "react";

// Chakra
import { Box, Divider, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";

// Common
import { IMenuItem } from "../Menu/Menu";
import { tPage } from "../../i18n/translator";
import { Facebook, Instagram, YouTube } from "../../assets/svg";
import { breakpointStyles, styles } from "./FooterStyles";
import { mergeStyles } from "../../styles/helper";
import { breakpoints } from "../../styles/variables/breakpoints";
import { useFooterDataArray } from "../../Hooks/footerDataArrays";

export const Footer: FC = (): JSX.Element => {
  const { serviceArray, infoArray, categoriesArray } = useFooterDataArray();
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const showContent = (title: string, data: IMenuItem[]): JSX.Element =>
    <Flex style={styles.menuColumn as CSSProperties}>
     <Text style={styles.menuTitle}>{title}</Text>
      {data.map((item, index) =>
      <Text _hover={styles.menuItemHover} style={styles.menuItem} key={index}>{item.label}</Text>)}
    </Flex>;

  const showIcon = (title: string, icon: FC): JSX.Element =>
    <Flex style={styles.iconBlock}>
      <Icon as={icon}/>
      <Text>{title}</Text>
    </Flex>;

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Divider style={{borderColor: "lightgray"}}/>
      <Flex style={styles.contentWrapper}>
        <Flex style={mergeStyles(styles.menuWrapper, breakpointStyles[breakpoint].menuWrapper)}>
          <Flex style={breakpointStyles[breakpoint].menu as CSSProperties}>
            {showContent(tPage("service.service"), serviceArray)}
            {showContent(tPage("information.information"), infoArray)}
            {showContent(tPage("title.categories"), categoriesArray)}
          </Flex>
          <Flex style={mergeStyles(styles.media, breakpointStyles[breakpoint].media)}>
            <Flex style={{flexDirection: "column", gap: "10px"}}>
              <Text style={styles.mediaTitle}>{tPage("information.media")}</Text>
              <Flex style={styles.iconWrapper}>
                {showIcon("Facebook", Facebook)}
                {showIcon("Instagram", Instagram)}
                {showIcon("YouTube", YouTube)}
              </Flex>
              <Divider/>
            </Flex>
            <Box>
              <Text>{tPage("description.support")} 9:00 - 12:00 {tPage("description.h")} & 14:00 - 16:00 {tPage("description.h")}</Text>
              <Text>{tPage("description.friday")} 9:00-12:00 {tPage("description.h")} - {tPage("description.tel")} +49 7623 - 468 412</Text>
              <Text>info@scotex.de</Text>
            </Box>
            <Text style={styles.lowerText}>{tPage("description.footer")}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
};