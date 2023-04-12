import {breakpoints} from "../../styles/variables/breakpoints";

export const styles = {
  wrapper: {
    background: "#1d1d1b",
    flexDirection: "column",
    gap: "30px"
  },

  contentWrapper: {
    justifyContent: "center",
    paddingTop: "30px",
    padding: "30px 10px 0px 10px"
  },

  upperContainer: {
    gap: "30px",
    justifyContent: "space-between",
  },

  menu: {
    width: "66%",
    justifyContent: "space-between"
  },

  inputBlock: {
    maxWidth: "400px",
    flexDirection: "column",
    gap: "10px"
  },

  newsletterTitle: {
    fontSize: "18px",
    color: "#e3e3e3"
  },

  newsletterDescription: {
    fontSize: "12px",
    color: "#e3e3e3"
  },

  inputWrapper: {
    gap: "5px"
  },

  input: {
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    background: "white",
    color: "black",
    fontSize: "14px",
    width: "66%",
    height: "32px"
  },

  button: {
    background: "#afc410",
    width: "30%",
    height: "32px",
    padding: "5px",
    fontSize: "14px",
    color: "white"
  },

  middleContainer: {
    justifyContent: "center",
    flexDirection: "column",
    gap: "30px",
    position: "relative"
  },

  iconWrapper: {
    justifyContent: "center",
    gap: "30px"
  },

  description: {
    fontSize: "14px",
    color: "#e3e3e3",
    position: "absolute",
    right: "5px",
    bottom: "5px"
  },

  lowerBlock: {
    justifyContent: "center"
  },

  lowerText: {
    fontSize: "14px",
    color: "#e3e3e3",
    padding: "0px 10px 30px 10px",
    width: "1140px"
  },

  menuColumn: {
    flexDirection: "column"
  },

  menuTitle: {
    fontSize: "18px",
    color: "#e3e3e3",
    paddingBottom: "10px"
  },

  menuItem: {
    fontSize: "14px",
    color: "#e3e3e3",
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

  iconText: {
    fontSize: "16px",
    color: "#e3e3e3"
  }
};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    upperContainer: {
      width: "1140px"
    },

    menu: {
      width: "66%",
      justifyContent: "space-between"
    },

    inputBlock: {
      width: "28%",
      flexDirection: "column",
      gap: "10px"
    },

  },
  [breakpoints.xl]: {
    upperContainer: {
      width: "970px"
    },

    menu: {
      width: "66%",
      justifyContent: "space-between"
    },

    inputBlock: {
      width: "28%",
      flexDirection: "column",
      gap: "10px"
    },

  },
  [breakpoints.lg]: {
    upperContainer: {
      width: "750px",
      flexDirection: "column"
    },

    menu: {
      width: "100%",
      justifyContent: "space-between"
    },

    inputBlock: {
      width: "100%",
      flexDirection: "column",
      gap: "10px"
    },

  },
  [breakpoints.md]: {
    upperContainer: {
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

    inputBlock: {
      width: "100%",
      flexDirection: "column",
      gap: "10px"
    },

  },
  [breakpoints.sm]: {
    upperContainer: {
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

    inputBlock: {
      width: "100%",
      flexDirection: "column",
      gap: "10px"
    },

  }
}
