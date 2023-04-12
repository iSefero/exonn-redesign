import { breakpoints } from "../../styles/variables/breakpoints"

export const styles = {
  wrapper: {
    background: "#1d1d1b",
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
    height: "120px",
    width: "200px"
  },

  infoBlockWrapper: {
    gap: "10px",
    flexDirection: "column"
  },

  input: {
    padding: "6px 12px",
    borderRadius: "0px",
    border: "none",
    background: "white",
    color: "black",
    width: "88%",
    height: "32px"
  },

  inputButton: {
    borderRadius: "0px 5px 5px 0px",
    background: "#afc410",
    width: "12%",
    height: "32px"
  },

  infoBlockText: {
    textAlign: "center",
    fontSize: "12px",
    padding: "0px 5px"
  },

  rightBlock: {
    gap: "5px",
    alignItems: "center"
  },

  loginButton: {
    background: "inherit"
  },

  cartButton: {
    cursor: "pointer"
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
    infoBlockWrapper: {
      width: "100%",
    },
    contentWrapper: {
      maxWidth: "750px",
    },
  },
  [breakpoints.md]: {
    infoBlockWrapper: {
      width: "100%",
    },
    contentWrapper: {
      maxWidth: "750px",
    },
  },
  [breakpoints.sm]: {
    infoBlockWrapper: {
      width: "100%",
    },
  }
}
