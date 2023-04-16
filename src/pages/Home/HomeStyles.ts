import {breakpoints} from "../../styles/variables/breakpoints";

export const styles = {
  wrapper: {
    flexDirection: "column",
    padding: "30px 0px"
  },

  mainContentBlock: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px"
  },

  button: {
    fontSize: "14px",
    background: "#d3d3d3",
    borderRadius: "40px",
    height: "34px"
  },

  divider: {
    padding: "30px 0px"
  },

  mainContentWrapper: {
    gap: "20px",
    width: "100%",
    justifyContent: "space-between"
  },

  image: {
    width: "65%"
  },

  imageBlock: {
    width: "100%",
    justifyContent: "space-evenly",
    gap: "30px"
  },

  videoBlock: {
    marginTop: "40px"
  }

};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    wrapper: {
      width: "980px",
    },

    mainContentBlock: {
      width: "30%",
    },

  },
  [breakpoints.xl]: {
    wrapper: {
      width: "840px",
    },

    mainContentBlock: {
      width: "30%",
    },

  },
  [breakpoints.lg]: {
    wrapper: {
      width: "720px",
    },

    mainContentWrapper: {
      flexDirection: "column",
      alignItems: "center"
    },

    mainContentBlock: {
      width: "100%",
    },

    imageBlock: {
      flexDirection: "column",
    }

  },
  [breakpoints.md]: {
    wrapper: {
      width: "480px",
    },

    mainContentWrapper: {
      flexDirection: "column",
      alignItems: "center"
    },

    mainContentBlock: {
      width: "100%",
    },

    imageBlock: {
      flexDirection: "column",
    }

  },
  [breakpoints.sm]: {
    wrapper: {
      width: "480px",
    },

    mainContentWrapper: {
      flexDirection: "column",
      alignItems: "center"
    },

    mainContentBlock: {
      width: "100%",
    },

    imageBlock: {
      flexDirection: "column",
    }
  }
}
