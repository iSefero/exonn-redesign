// React
import { CSSProperties, FC } from "react";

// Chakra
import { Flex, Image, Input, Button, useBreakpointValue } from "@chakra-ui/react";

// Common
import logo from "../../assets/images/logo.png"
import { tPage } from "../../i18n/translator";
import { ChangeLang } from "../ChangeLang/ChangeLang";
import { CartIcon, SearchIcon } from "../../assets/svg";
import { breakpointStyles, styles } from "./HeaderStyles";
import { breakpoints } from "../../styles/variables/breakpoints";
import { mergeStyles } from "../../styles/helper";


export const Header: FC = (): JSX.Element => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const logoBlock = <Image style={styles.logo} src={logo}/>;
  const middleBlock =
    <form style={styles.inputWrapper}>
      <Flex>
        <Input style={styles.input} placeholder={tPage("placeholders.search")}/>
        <Button style={styles.inputButton}>
          <SearchIcon color="white"/>
        </Button>
      </Flex>
    </form>;

  const rightSideBlock = <Flex style={styles.rightBlock}>
    <ChangeLang/>
    <Flex style={styles.cartLoginBlock}>
      <Button style={styles.loginButton}>{tPage("button.login")}</Button>
      <Flex style={styles.cartButton}>
        <CartIcon color="white"/>
      </Flex>
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