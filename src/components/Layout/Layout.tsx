// React
import React, { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

// Chakra

import { Box, Button, Divider, Flex, Icon } from "@chakra-ui/react";

// Common
import { Header } from "../Header/Header";
import { CustomMenu } from "../CustomMenu/CustomMenu";
import { Footer } from "../Footer/Footer";
import { ArrowUp } from "../../assets/svg";
import { useWindowSize } from "../../hooks/windowSize";
import { styles } from "./LayoutStyles";
import { tPage } from "../../i18n/translator";
import { ILayout } from "../../types/types";


export const Layout: FC<ILayout> = ({children}): JSX.Element => {
  const { showUpButton, handleUpClick } = useWindowSize();

  const moveUpButton =
  <Flex onClick={handleUpClick} style={styles.wrapperContent as CSSProperties}>
    <Icon as={ArrowUp}/>
  </Flex>;

  return (
    <div style={styles.wrapper as CSSProperties}>
      <div>
        <Link to="/">
          <Button style={styles.taskButton}>{tPage("button.firstTask")}</Button>
        </Link>
        <Link to="/item">
          <Button style={styles.taskButton}>{tPage("button.secondTask")}</Button>
        </Link>
      </div>
      <Header/>
      <CustomMenu/>
      <Divider style={styles.divider}/>
      <Flex style={styles.children}>
        {children}
      </Flex>
      <Box>
        <Footer/>
      </Box>
      {showUpButton && moveUpButton}
    </div>
  )
}