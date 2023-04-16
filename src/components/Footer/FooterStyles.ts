import {breakpoints} from "../../styles/variables/breakpoints";

export const styles = {
  wrapper: {
    background: "#fff",
    flexDirection: "column",
    gap: "30px",
    paddingBottom: "50px"
  },

  contentWrapper: {
    justifyContent: "center",
    paddingTop: "30px",
    padding: "30px 10px 0px 10px"
  },

  menuWrapper: {
    gap: "50px",
    justifyContent: "space-between",
  },

  media: {
    maxWidth: "400px",
    flexDirection: "column",
    gap: "10px",
    height: "100%",
    justifyContent: "space-between"
  },

  mediaTitle: {
    fontSize: "22px",
    fontFamily: "arial",
    color: "#0066cc",
    fontWeight: "600"
  },

  iconWrapper: {
    gap: "30px"
  },

  lowerText: {
    fontSize: "14px",
    textDecoration: "underline"
  },

  menuColumn: {
    flexDirection: "column"
  },

  menuTitle: {
    fontSize: "22px",
    fontFamily: "arial",
    paddingBottom: "10px",
    color: "#0066cc",
    fontWeight: "600"
  },

  menuItem: {
    fontSize: "14px",
    cursor: "pointer"
  },

  menuItemHover: {
    textDecoration: "underline"
  },

  iconBlock: {
    alignItems: "center",
    gap: "3px",
    cursor: "pointer"
  },

};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    menuWrapper: {
      width: "1140px"
    },

    menu: {
      width: "66%",
      justifyContent: "space-between",
      gap: "10px"
    },

    media: {}

  },
  [breakpoints.xl]: {
    menuWrapper: {
      width: "970px"
    },

    menu: {
      width: "66%",
      justifyContent: "space-between",
      gap: "10px"
    },

    media: {}

  },
  [breakpoints.lg]: {
    menuWrapper: {
      width: "750px",
      flexDirection: "column"
    },

    menu: {
      width: "100%",
      justifyContent: "space-between"
    },

    media: {}

  },
  [breakpoints.md]: {
    menuWrapper: {
      width: "750px",
      flexDirection: "column",
      alignItems: "center"
    },
    menu: {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "30px"
    },

    media: {
      textAlign: "center"
    }

  },
  [breakpoints.sm]: {
    menuWrapper: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center"
    },

    menu: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      textAlign: "center",
    },

    media: {
      textAlign: "center"
    }

  }
}
