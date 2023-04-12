import { CSSProperties, FC } from "react";

import { Button, Divider, Flex, Icon, Input, Text, useBreakpointValue } from "@chakra-ui/react";

import { IMenuItem } from "../Menu/Menu";
import { tPage } from "../../i18n/translator";
import { Facebook, Instagram, YouTube } from "../../assets/svg";
import { breakpointStyles, styles } from "./FooterStyles";
import { mergeStyles } from "../../styles/helper";
import { breakpoints } from "../../styles/variables/breakpoints";
import { useFooterArray } from "../../Hooks/footerArrays";

export const Footer = () => {
  const [serviceArray, infoArray, categoriesArray] = useFooterArray();
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const showContent = (title: string, data: IMenuItem[]) =>
    <Flex style={styles.menuColumn as CSSProperties}>
     <Text style={styles.menuTitle}>{title}</Text>
      {data.map((item, index) =>
      <Text _hover={styles.menuItemHover} style={styles.menuItem} key={index}>{item.label}</Text>)}
    </Flex>;

  const showIcon = (title: string, icon: FC) =>
    <Flex style={styles.iconBlock}>
      <Icon as={icon}/>
      <Text style={styles.iconText}>{title}</Text>
    </Flex>;

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex style={styles.contentWrapper}>
        <Flex style={mergeStyles(styles.upperContainer, breakpointStyles[breakpoint].upperContainer)}>
          <Flex style={mergeStyles(styles.menu, breakpointStyles[breakpoint].menu)}>
            {showContent(tPage("service.service"), serviceArray)}
            {showContent(tPage("information.information"), infoArray)}
            {showContent(tPage("title.categories"), categoriesArray)}
          </Flex>
          <Flex style={styles.inputBlock as CSSProperties}>
            <Text style={styles.newsletterTitle}>{tPage("information.newsletter")}</Text>
            <Text style={styles.newsletterDescription}>{tPage("description.newsletter")}</Text>
            <Flex style={styles.inputWrapper}>
              <Input style={styles.input} placeholder={tPage("placeholders.email")}></Input>
              <Button style={styles.button}>
                {tPage("button.subscribe")}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex style={styles.middleContainer as CSSProperties}>
        <Flex style={styles.iconWrapper}>
          {showIcon("Facebook", Facebook)}
          {showIcon("Instagram", Instagram)}
          {showIcon("YouTube", YouTube)}
        </Flex>
        <Text style={styles.description as CSSProperties}>{tPage("description.allPrices")}</Text>
        <Divider/>
      </Flex>
      <Flex style={styles.lowerBlock}>
        <Text style={styles.lowerText}>{tPage("description.footer")}</Text>
      </Flex>
    </Flex>
  )
};