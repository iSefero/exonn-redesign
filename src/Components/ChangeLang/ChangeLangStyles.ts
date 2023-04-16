export const styles = {
  wrapper: {
    position: "relative",
    flexDirection: "column",
  },

  langMenuWrapper: {
    flexDirection: "column",
    position: "relative"
  },

  langMenu: {
    position: "absolute",
    padding: "2px 3px",
    background: "white",
    border: "1px solid lightgray",
    borderRadius: "3px",
    zIndex: "11",
    top: "5px",
    left: "-10px",
    flexDirection: "column",
    color: "black"
  },

  langMenuItem: {
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    padding: "3px 5px"
  },

  langMenuItemHover: {
    background: "blue.100"
  },

  button: {
    gap: "5px",
    cursor: "pointer",
    background: "#9ac4edd9",
    alignItems: "center",
    padding: "0px 10px",
    borderRadius: "5px",
    height: "34px"
  }
};