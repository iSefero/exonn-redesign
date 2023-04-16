import { breakpoints } from "../../styles/variables/breakpoints"

export const styles = {
  wrapper: {
    background: "white",
    justifyContent: "center",
    padding: "10px 0px"
  },

  contentWrapper: {
    width: "100%",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    maxWidth: "1140px",
    padding: "0px 15px"
  },

  logo: {
    width: "200px"
  },

  inputWrapper: {
    width: "100%",
    border: "3px solid #0066cc",
    borderRadius: "6px"
  },

  input: {
    padding: "6px 12px",
    borderRadius: "5px 0px 0px 5px",
    border: "none",
    background: "white",
    color: "black",
    width: "88%",
    height: "32px"
  },

  inputButton: {
    borderRadius: "0px",
    background: "#0066cc",
    width: "13%",
    height: "32px"
  },

  rightBlock: {
    gap: "25px",
    alignItems: "center"
  },

  cartLoginBlock: {
    gap: "10px"
  },

  loginButton: {
    background: "#9ac4edd9",
    height: "32px"
  },

  cartButton: {
    cursor: "pointer",
    background: "orange",
    padding: "0px 10px",
    borderRadius: "5px"
  },

  contentSM: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
  },

  contentMD: {
    width: "100%",
    gap: "20px",
    flexDirection: "column"
  },

  contentMDHeader: {
    width: "100%",
    justifyContent: "space-between"
  }
}

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
  },
  [breakpoints.xl]: {
  },
  [breakpoints.lg]: {
    contentWrapper: {
      maxWidth: "750px",
    },
  },
  [breakpoints.md]: {
    contentWrapper: {
      maxWidth: "750px",
    },
  },
  [breakpoints.sm]: {
  }
}
