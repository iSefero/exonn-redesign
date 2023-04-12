import { breakpoints } from "../../styles/variables/breakpoints";

export const styles = {
  wrapper: {
    flexDirection: "column",
  },

  dividerExtraMenu: {
    height: "auto"
  },

  contentExtraMenu: {
    flexDirection: "column",
    padding: "10px"
  },

  extraItem: {
    fontSize: "14px",
    color: "#afc410",
    cursor: "pointer"
  },

  hoverExtraItem: {
    textDecoration: "underline"
  },

  contentWrapper: {
    width: "100%",
    gap: "30px",
    padding: "30px 10px",
  },

  reviewText: {
    paddingTop: "30px",
    fontSize: "30px"
  },

  redText: {
    padding: "10px 15px",
    marginTop: "30px",
    background: "#f5f5f5",
    width: "100%",
    borderRadius: "3px",
    border: "1px solid pink"
  },

  blueText: {
    padding: "15px",
    marginTop: "30px",
    background: "#d9edf7",
    width: "100%",
    borderRadius: "3px",
    border: "1px solid lightblue"
  },

  customerTextLarge: {
    marginTop: "30px",
    fontSize: "25px",
    textAlign: "center"
  },

  customerTextSmall: {
    marginTop: "10px",
    fontSize: "12px",
    textAlign: "center"
  },

  similarText: {
    marginTop: "30px",
    fontSize: "25px",
    textAlign: "center"
  },

  similarTextSmall: {
    marginTop: "10px",
    fontSize: "12px",
    textAlign: "center"
  },

  youSeenText: {
    marginTop: "30px",
    fontSize: "25px",
    textAlign: "center"
  },

  footerText: {
    margin: "10px 0px 50px 0px",
    fontSize: "12px",
    textAlign: "center"
  }
};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    carouselWrapper: {
      width: "35%"
    },

    wrapper: {
      maxWidth: "1170px"
    },

    paymentWrapper: {
      width: "45%",
    },

    contentWrapper: {},

    alsoBought: {
      width: "23%"
    }

  },
  [breakpoints.xl]: {
    carouselWrapper: {
     width: "40%"
    },

    wrapper: {
      maxWidth: "970px"
    },

    paymentWrapper: {
      width: "45%",
    },

    contentWrapper: {
      flexWrap: "wrap"
    },

    alsoBought: {
      width: "46%"
    }

  },
  [breakpoints.lg]: {
    carouselWrapper: {
      width: "100%"
    },

    wrapper: {
      maxWidth: "720px"
    },

    paymentWrapper: {
      width: "70%",
    },

    contentWrapper: {
      flexWrap: "wrap"
    },

    alsoBought: {
      width: "100%"
    }

  },
  [breakpoints.md]: {
    carouselWrapper: {
      width: "100%"
    },

    wrapper: {
      maxWidth: "720px"
    },

    paymentWrapper: {
      width: "100%",
    },

    contentWrapper: {
      flexDirection: "column"
    },

    alsoBought: {
      width: "100%"
    }

  },
  [breakpoints.sm]: {
    carouselWrapper: {
      width: "100%"
    },

    wrapper: {
      maxWidth: "720px"
    },

    paymentWrapper: {
      width: "100%",
    },

    contentWrapper: {
      flexDirection: "column"
    },

    alsoBought: {
      width: "100%"
    }

  }
}
