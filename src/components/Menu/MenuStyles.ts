import { breakpoints } from "../../styles/variables/breakpoints";

type Props = {
  label: string
}

export const styles = {
  wrapper: {
    gap: "5px",
  },

  wrapperContent: {
    position: "relative",
  },

  hoverMainMenu: {
    transform: "scale(1.01)"
  },

  maiMenu: {
    alignItems: "center",
    padding: "5px 10px",
    background: "#68a8e8",
    borderRadius: "5px",
    gap: "4px",
    cursor: "pointer",
    color:  "#fff",
    position: "relative"
  },

  mainMenuText: {
    whiteSpace: "nowrap"
  },

  contextMenu: {
    padding: "4px 0px",
    background: "white",
    zIndex: "1"
  },

  itemContextMenu: (item?: Props[]) => ({
    background: item ? "gray" : "#68a8e8",
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
    background: "#68a8e8",
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
    wrapper: {

    },

    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "35px",
      left: "-20px",
    }
  },
  [breakpoints.xl]: {
    wrapper: {
    },

    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "35px",
      left: "-20px",
    }
  },
  [breakpoints.lg]: {
    wrapper: {
    },

    contextMenu: {
      position: "absolute",
      width: "170px",
      border: "1px solid gray",
      boxShadow: "1px 1px 4px 1px gray",
      top: "35px",
      left: "-20px",
    }
  },
  [breakpoints.md]: {
    wrapper: {
      flexDirection: "column"
    },

    contextMenu: {
      width: "100%",
    }
  },
  [breakpoints.sm]: {
    wrapper: {
      flexDirection: "column"
    },

    contextMenu: {
      width: "100%",
    }
  }
};
