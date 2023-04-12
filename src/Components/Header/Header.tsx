import { CSSProperties, FC } from "react";

import { Flex, Image, Box, Input, Button, Text, useBreakpointValue } from "@chakra-ui/react";

import logo from "../../assets/images/logo.svg"
import { tPage } from "../../i18n/translator";
import { ChangeLang } from "../ChangeLang/ChangeLang";
import { CartIcon, SearchIcon } from "../../assets/svg";
import { breakpointStyles, styles } from "./HeaderStyles";
import { breakpoints } from "../../styles/variables/breakpoints";
import { mergeStyles } from "../../styles/helper";


export const Header: FC = () => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const logoBlock = <Image style={styles.logo} src={logo}/>;
  const middleBlock = <Flex style={mergeStyles(styles.infoBlockWrapper, breakpointStyles[breakpoint].infoBlockWrapper)}>
    <form>
      <Flex >
        <Input style={styles.input} placeholder={tPage("placeholders.search")}/>
        <Button style={styles.inputButton}>
          <SearchIcon color="white"/>
        </Button>
      </Flex>
    </form>
    <Box style={styles.infoBlockText as CSSProperties}>
      <Text>{tPage("description.support")} 9:00 - 12:00 {tPage("description.h")} & 14:00 - 16:00 {tPage("description.h")}</Text>
      <Text>{tPage("description.friday")} 9:00-12:00 {tPage("description.h")} - {tPage("description.tel")} +49 7623 - 468 412</Text>
      <Text>info@scotex.de</Text>
    </Box>
  </Flex>;

  const rightSideBlock = <Flex style={styles.rightBlock}>
    <ChangeLang/>
    <Button style={styles.loginButton}>{tPage("button.login")}</Button>
    <Flex style={styles.cartButton}>
      <CartIcon color="#afc410"/>
    </Flex>
  </Flex>;


  // Render content according to screen size
  const renderContent = () => {
    if (breakpoint === breakpoints.sm ) {
      return (
        <Flex style={styles.contentSM as CSSProperties}>
          {logoBlock}
          {rightSideBlock}
          {middleBlock}
        </Flex>
      );
    } else if (breakpoint === breakpoints.md || breakpoint === breakpoints.lg) {
      return (
        <Flex style={styles.contentMD as CSSProperties}>
          <Flex style={styles.contentMDHeader}>
            {logoBlock}
            {rightSideBlock}
          </Flex>
          {middleBlock}
        </Flex>
      );
    } else {
      return (
        <>
          {logoBlock}
          {middleBlock}
          {rightSideBlock}
        </>
      );
    }
  };


  return (
    <Flex style={styles.wrapper}>
      <Flex style={mergeStyles(styles.contentWrapper, breakpointStyles[breakpoint].contentWrapper)}>
        {renderContent()}
      </Flex>
    </Flex>
  )
}