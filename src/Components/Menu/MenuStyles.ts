import { breakpoints } from "../../styles/variables/breakpoints";
import { IMenuItem } from "./Menu";

export const styles = {
  wrapper: {
    position: "relative",
  },

  hoverMainMenu: {
    color: "#1d1d1b !important"
  },

  maiMenu:(stateName: string, itemName: string) => ({
    alignItems: "center",
    padding: "10px 15px",
    gap: "4px",
    cursor: "pointer",
    color: stateName === itemName ? "#1d1d1b" : "#afc410",
    position: "relative"
  }),

  contextMenu: {
    padding: "4px 0px",
    background: "white",
    zIndex: "1"
  },

  itemContextMenu: (item: IMenuItem[] | undefined) => ({
    background: item ? "gray" : "#afc410",
    color: "white"
  }),

  contextMenuItem: {
    padding: "3px 20px",
    width: "100%",
    cursor: "pointer"
  },

  doubleContextMenu: {
    position: "absolute",
    top: "34px",
    left: "0px",
    border: "1px solid gray",
    width: "170px",
    background: "white",
    padding: "4px 0px",
  },

  hoverDoubleContextItem: {
    background: "#afc410",
    color: "white !important"
  },

  doubleContextItem: {
    padding: "3px 20px",
    width: "100%",
    cursor: "pointer",
    color: "black"
  }
};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "42px",
      left: "0px",
    }
  },
  [breakpoints.xl]: {
    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "42px",
      left: "0px",
    }
  },
  [breakpoints.lg]: {
    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "42px",
      left: "0px",
    }
  },
  [breakpoints.md]: {
    contextMenu: {
      width: "100%",
    }
  },
  [breakpoints.sm]: {
    contextMenu: {
      width: "100%",
    }
  }
};
