export const styles = {
  wrapper: {
    flexDirection: "column",
    width: "100%",
    gap: "5px",
    alignItems: "center",
    cursor: "pointer"
  },

  image: {
    height: "250px",
    width: "100%",
    objectFit: "contain"
  },

  title: {
    fontWeight: "700",
    color: "#0066cc",
    fontSize: "18px",
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

  price:(oldPrice?: string) =>({
    fontSize: "30px",
    fontWeight: "700",
    color: oldPrice ? "#de0000cc" : "#0066cc",
    lineHeight: "35px"
  }),

  available: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#33a039",
    textAlign: "center"
  }
}