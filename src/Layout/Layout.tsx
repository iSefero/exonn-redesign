import React, { CSSProperties } from "react";
import { Divider, Flex, Icon } from "@chakra-ui/react";

import { Header } from "../Components/Header/Header";
import { CustomMenu } from "../Components/CustomMenu/CustomMenu";
import { Footer } from "../Components/Footer/Footer";
import { ArrowUp } from "../assets/svg";
import { useWindowSize } from "../Hooks/windowSize";
import { styles } from "./LayoutStyles";

export const Layout = ({children}: any) => {
  const { showUpButton, handleUpClick } = useWindowSize();

  const up =
  <Flex onClick={handleUpClick} style={styles as CSSProperties}>
    <Icon as={ArrowUp}/>
  </Flex>;

  return (
    <div>
      {showUpButton && up}
      <Header/>
      <CustomMenu/>
      <Divider/>
      <Flex style={styles.children}>
        {children}
      </Flex>
      <Footer/>
    </div>
  )
}