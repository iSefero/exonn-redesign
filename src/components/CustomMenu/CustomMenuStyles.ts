export const styles = {
  wrapperContent: (smallScreen: boolean) => ({
    justifyContent: "center",
    zIndex: "10",
    background: "#FFFFFFD3",
    width: "100%",
    flexDirection: smallScreen ? "column" : "row",
  }),

  menuButtonWrapper: {
    width: "100%"
  },

  menuButtonContent: {
    padding: "5px 15px",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "fit-content",
    gap: "5px",
    cursor: "pointer"
  },

  buttonIcon: {
    padding: "7px",
    border: "1px solid lightgray",
    borderRadius: "5px"
  }
};