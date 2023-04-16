export const styles = {
  wrapper: {
    flexDirection: "column",
    width: "100%"
  },

  priceWrapper: {
    flexDirection: "column"
  },

  vatText: {
    marginTop: "20px"
  },

  vatUnderline: {
    textDecoration: "underline"
  },

  divider: {
    marginTop: "10px",
    borderColor: "lightgray"
  },

  shipWrapper: {
    flexDirection: "column",
    gap: "6px"
  },

  priceBlock: {
    gap: "5px",
    alignItems: "center"
  },

  oldPriceWrapper: {
    position: "relative"
  },

  oldPrice: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#0066cc"
  },

  redLine: {
    position: "absolute",
    top: "6px",
    left: "0",
    width: "calc(100% - 5px)",
    height: "60%",
    zIndex: "10",
    background: "linear-gradient(to top left,transparent,transparent calc(50% - 1.5px),rgba(220,0,0,.8) 50%,transparent calc(50% + 2px),transparent)"
  },

  newPrice:(color: boolean) => ({
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "45px",
    color: color ? "#de0000cc" : "#0066cc"
  }),

  endingText: {
    marginTop: "10px",
    fontWeight: "500",
    color: "red"
  },

  shippingText: {
    color: "green",
    fontWeight: "700"
  },

  methodsWrapper: {
    margin: "15px 0px",
    height: "70px",
    position: "relative"
  },

  cartButton: {
    background: "#ff9900",
    marginTop: "20px",
    color: "white",
    height: "50px"
  },

  cartButtonHover: {
    transform: "scale(1.02)"
  },

  buttonWrapper: {
    gap: "15px",
    marginTop: "20px",
    flexDirection: "column"
  },

  button: {
    gap: "10px",
    background: "#ededed"
  }

}