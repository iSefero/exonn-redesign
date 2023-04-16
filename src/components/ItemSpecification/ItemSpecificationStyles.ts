import {breakpoints} from "../../styles/variables/breakpoints";

export const styles = {
  text: {
    paddingTop: "30px",
    fontSize: "20px"
  },

  itemWrapper: (color: boolean) => ({
    background: color ? "#F5F5F5" : "#FFFFFF",
    padding: "5px 10px"
  }),

  rightItem: {
    width: "100%"
  }
};

export const breakpointStyles = {
  [breakpoints["2xl"]]: {
    leftItem: {
      width: "50%"
    }
  },
  [breakpoints.xl]: {
    leftItem: {
      width: "50%"
    }
   },
  [breakpoints.lg]: {
    leftItem: {
      width: "100%"
    }
  },
  [breakpoints.md]: {
    leftItem: {
      width: "100%"
    }
  },
  [breakpoints.sm]: {
    leftItem: {
      width: "100%"
    }
  }
};
