import { CSSProperties, FC, useEffect, useState } from "react";

import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Flex,
  Text,
  Box,
  Icon,
  Divider,
  useBreakpointValue, useDisclosure, Collapse
} from "@chakra-ui/react"

import { tPage } from "../../i18n/translator";
import { breakpoints } from "../../styles/variables/breakpoints";
import { Menu } from "../Menu/Menu";
import { useMenuArrays } from "../../Hooks/menuArrays";
import { styles } from "./CustomMenuStyles";


export const CustomMenu: FC = (): JSX.Element => {
  const [ menuItems2XL, menuItemsLG, menuItemsXL ] = useMenuArrays();
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const smallScreen = breakpoint === breakpoints.sm || breakpoint === breakpoints.md;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
    if (!smallScreen) setShowMenu(true)
    else setShowMenu(false)
  }, [smallScreen])

  const showArray = () => {
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
    <Flex style={styles.wrapper(smallScreen) as CSSProperties}>
      {smallScreen && menuButton}
      {smallScreen
        ? (<Collapse in={isOpen} animateOpacity>
           <Menu buttonItem={showArray()}/>
          </Collapse>)
        : showMenu && <Menu buttonItem={showArray()}/>}
    </Flex>
  )
};