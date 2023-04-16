// React
import { CSSProperties, FC, useEffect, useState } from "react";

// Chakra
import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Flex,
  Text,
  Box,
  Icon,
  Divider,
  useBreakpointValue, useDisclosure, Collapse
} from "@chakra-ui/react"

// Common
import { tPage } from "../../i18n/translator";
import { breakpoints } from "../../styles/variables/breakpoints";
import { Menu } from "../Menu/Menu";
import { useMenuDataList } from "../../hooks/menuDataList";
import { styles } from "./CustomMenuStyles";
import { IMenuExtraItem } from "../../types/types";


export const CustomMenu: FC = (): JSX.Element => {
  const { menuItems2XL, menuItemsLG, menuItemsXL } = useMenuDataList();
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const smallScreen = breakpoint === breakpoints.sm || breakpoint === breakpoints.md;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (!smallScreen) setShowMenu(true)
    else setShowMenu(false)
  }, [smallScreen])

  // Return data under different devices
  const dataForDiffScreens = (): IMenuExtraItem[]  => {
    if (breakpoint === breakpoints["2xl"]) {
      return menuItems2XL
    } else if (breakpoint === breakpoints.xl) {
      return menuItemsXL
    } else if (breakpoint === breakpoints.lg) {
      return menuItemsLG
    } else {
      return menuItems2XL
    }
  };

  const menuButton =
    <Box style={styles.menuButtonWrapper}>
      <Flex onClick={onToggle} style={styles.menuButtonContent}>
        <Flex style={styles.buttonIcon}>
          <Icon color="gray" as={HamburgerIcon}/>
        </Flex>
        <Text>{tPage("menu.menu")}</Text>
      </Flex>
      <Divider/>
    </Box>;


  return (
    <Flex style={styles.wrapperContent(smallScreen) as CSSProperties}>
      {smallScreen && menuButton}
      {smallScreen
        ? (<Collapse in={isOpen} animateOpacity>
           <Menu buttonItem={dataForDiffScreens()}/>
          </Collapse>)
        : showMenu && <Menu buttonItem={dataForDiffScreens()}/>}
    </Flex>
  )
};