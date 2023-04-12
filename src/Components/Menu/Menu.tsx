import { CSSProperties, FC, useState } from "react";
import { Box, Divider, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { breakpoints } from "../../styles/variables/breakpoints";
import { breakpointStyles, styles } from "./MenuStyles";
import { mergeStyles } from "../../styles/helper";


export interface IMenuItem {
  label?: string;
  menuItem?: IMenuItem[];
}

export interface IDesktopMenu {
  buttonItem: {
    label: string;
    menuItem?: IMenuItem[];
  }[];
}


export const Menu: FC<IDesktopMenu> = ({buttonItem}) => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const smallScreen = breakpoint === breakpoints.sm || breakpoint === breakpoints.md;
  const [showContext, setShowContext] = useState({state: false, name: "Home"});
  const [showDoubleContext, setShowDoubleContext] = useState(false);

  const showContextMenu = (item: any) =>
  {
    const clickChange = () => {
      setShowContext({state: !showContext.state, name: item.label})
    }

    const mouseEnter = () => {
      setShowContext({state: true, name: item.label})
    }

    const mouseLeave = () => {
      setShowContext({state: false, name: ""})
    }

    return smallScreen
      ? {onClick: clickChange}
      : {onMouseEnter: mouseEnter, onMouseLeave: mouseLeave}
  };


  return (
    <>
      {buttonItem.map((item, index) =>
        <Box
          key={index}
          style={styles.wrapper as CSSProperties}>
          <Flex
            {...showContextMenu(item)}
            _hover={styles.hoverMainMenu}
            style={styles.maiMenu(showContext.name, item.label) as CSSProperties}>
            <Text>
              {item.label}
            </Text>
            {item.menuItem && <Icon as={ChevronDownIcon}/>}
          </Flex>
          {(item.menuItem && showContext.state && showContext.name === item.label) && <Box
            onMouseEnter={() => setShowContext({
              state: true,
              name: item.label
            })}
            onMouseLeave={() => setShowContext({
              state: false,
              name: ""
            })}
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
                {(item.menuItem && showDoubleContext) && <Box
                  style={styles.doubleContextMenu as CSSProperties}>
                  {item.menuItem?.map((item, index) =>
                    <Text
                      key={index}
                      _hover={styles.hoverDoubleContextItem}
                      style={styles.doubleContextItem}>
                      {item.label}
                    </Text>)}
                </Box>}
              </Box>)}
          </Box>}
        </Box>)}
    </>
  )
};
