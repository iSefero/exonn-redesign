import { breakpoints } from "../../styles/variables/breakpoints";

export const styles = {
  wrapper: {
    marginTop: "30px",
    flexDirection: "column",
    width: "100%",
  },

  itemInfo: {
    width: "100%",
    gap: "30px"
  },

  descriptionBlock: {
    marginTop: "50px"
  },

  textSpecification: {
    padding: "40px 0px 20px 0px",
    fontSize: "30px",
    fontWeight: "700"
  },

  dividerAboveReview: {
    marginTop: "20px"
  },

  dividerUnderReview: {
    marginTop: "40px"
  },

  extraBlock: {
    overflowX: "auto",
    gap: "20px",
    paddingBottom: "20px"
  },

  carouselBlock: {
    width: "100%"
  },

  paymentBlock: {
    width: "100%"
  },

  contentExtraMenu: {
    flexDirection: "column",
    padding: "10px"
  },

  contentWrapper: {
    width: "100%",
    gap: "30px",
    marginTop: "40px",
  },

  reviewText: {
    paddingTop: "30px",
    fontSize: "30px",
    fontWeight: "700"
  },

  redText: {
    padding: "10px 15px",
    marginTop: "30px",
    background: "#f5f5f5",
    color: "#f68383",
    width: "100%",
    borderRadius: "3px",
    border: "1px solid #efd4d4"
  },

  blueText: {
    padding: "15px",
    marginTop: "30px",
    background: "#d9edf7",
    color: "#6a9bf3",
    width: "100%",
    borderRadius: "3px",
    border: "1px solid lightblue"
  },

  customerTextLarge: {
    marginTop: "30px",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "500"
  },

  customerTextSmall: {
    marginTop: "10px",
    textAlign: "center"
  },

  similarText: {
    marginTop: "30px",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "500"
  },

  similarTextSmall: {
    marginTop: "10px",
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
  },

  linkHover: {
    color: "#0066cc",
    textDecoration: "underline"
  },

  link: {
    display: "flex",
    alignItems: "center"
  },

  extraItem: {
    height: "100%"
  },

  hoverExtraItem: {
    transform: "scale(0.98)"
  }
};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
   wrapper: {
      maxWidth: "1170px"
    },

    alsoBought: {
      width: "23%"
    },

    extraItem: {
      minWidth: "23%"
    }

  },
  [breakpoints.xl]: {
    wrapper: {
      maxWidth: "970px"
    },

    alsoBought: {
      width: "46%"
    },

    extraItem: {
      minWidth: "48%"
    }

  },
  [breakpoints.lg]: {
    itemInfo: {
      flexDirection: "column"
    },

    wrapper: {
      maxWidth: "720px"
    },

    alsoBought: {
      width: "100%"
    },

    extraItem: {
      minWidth: "46%"
    }

  },
  [breakpoints.md]: {
    itemInfo: {
      flexDirection: "column"
    },

    wrapper: {
      maxWidth: "720px"
    },

    contentWrapper: {
      flexDirection: "column"
    },

    alsoBought: {
      width: "100%"
    },

    extraItem: {
      minWidth: "100%"
    }

  },
  [breakpoints.sm]: {
        itemInfo: {
      flexDirection: "column"
    },

    wrapper: {
      maxWidth: "720px"
    },

    contentWrapper: {
      flexDirection: "column"
    },

    alsoBought: {
      width: "100%"
    },

    extraItem: {
     minWidth: "100%"
    }
  }
}
