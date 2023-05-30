import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EB5765",
    },
    secondary: {
      main: "#0cbd93",
    },
    text: {
      primary: "#252733",
      secondary: "#A3AED0",
    },
    background: {
      default: "#f4f7fe",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export default Theme;
