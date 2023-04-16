// React
import { CSSProperties, FC, useState } from "react";

// Chakra
import { Box, Divider, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Common
import { breakpoints } from "../../styles/variables/breakpoints";
import { breakpointStyles, styles } from "./MenuStyles";
import { mergeStyles } from "../../styles/helper";
import { IMenuExtraItem, IMenuItem, IMenuItemArray } from "../../types/types";

type Click = {
  onClick: () => void;
}

type Mouse = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type ContextMenuState = {
  state: boolean;
  name: string;
}


export const Menu: FC<IMenuItemArray> = ({buttonItem}): JSX.Element => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const smallScreen = breakpoint === breakpoints.sm || breakpoint === breakpoints.md;
  const [showContextMenu, setShowContextMenu] = useState<ContextMenuState>({state: false, name: "Home"});
  const [showDoubleContext, setShowDoubleContext] = useState<boolean>(false);

  const contextMenuMethod = (item: IMenuExtraItem): Click | Mouse => {
    const clickChange = () => {
      setShowContextMenu({state: !showContextMenu.state, name: item.label})
    }

    const mouseEnter = (): void => {
      setShowContextMenu({state: true, name: item.label})
    }

    const mouseLeave = (): void => {
      setShowContextMenu({state: false, name: ""})
    }

    return smallScreen
      ? {onClick: clickChange}
      : {onMouseEnter: mouseEnter, onMouseLeave: mouseLeave}
  };


  const extraContextMenu = (item: IMenuItem) => (item.menuItem && showDoubleContext) && <Box
    style={styles.doubleContextMenu as CSSProperties}>
    {item.menuItem?.map((item, index) =>
      <Text
        key={index}
        _hover={styles.hoverDoubleContextItem}
        style={styles.doubleContextItem}>
        {item.label}
      </Text>)}
  </Box>;

  const contextMenu = (item: IMenuExtraItem) => (item.menuItem && showContextMenu.state && showContextMenu.name === item.label) && <Box
    {...contextMenuMethod(item)}
    style={mergeStyles(styles.contextMenu, breakpointStyles[breakpoint].contextMenu)}>
    {item.menuItem?.map((item, index) =>
      <Box
        key={index}
        onClick={() => setShowDoubleContext(!showDoubleContext)}
        _hover={styles.itemContextMenu(item.menuItem)}
        style={styles.contextMenuItem}>
        {item.label}
        {item.menuItem && <Icon as={ChevronDownIcon}/>}
        <Divider/>
        {extraContextMenu(item)}
      </Box>)}
  </Box>;

  const maninMenu = (data: IMenuExtraItem[]) => data.map((item, index) =>
    <Box
      key={index}
      style={styles.wrapperContent as CSSProperties}>
      <Flex
        {...contextMenuMethod(item)}
        _hover={styles.hoverMainMenu}
        style={styles.maiMenu as CSSProperties}>
        <Text style={styles.mainMenuText as CSSProperties}>
          {item.label}
        </Text>
        {item.menuItem && <Icon as={ChevronDownIcon}/>}
      </Flex>
      {contextMenu(item)}
    </Box>);


  return (
    <Flex style={mergeStyles(styles.wrapper, breakpointStyles[breakpoint].wrapper)}>
      {maninMenu(buttonItem)}
    </Flex>
  )
};
