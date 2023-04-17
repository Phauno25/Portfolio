import { colors, createTheme } from "@mui/material";

const themes = {
  pink: () => {
    const pinkTheme = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: colors.green[600],
        },
        secondary: {
          main: colors.pink["A400"],
        },
        info: {
          main: "#064663",
        },
        error: {
          main: colors.orange[900],
        },
        background: {
          default: "#252525",
        },
      },
    });
    return pinkTheme;
  },
  blue: () => {
    const blueTheme = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: colors.purple[500],
        },
        secondary: {
          main: colors.blue[500],
        },
        info: {
          main: "#064663",
        },
        error: {
          main: colors.red[900],
        },
        background: {
          default: "#252525",
        },
      },
    });

    return blueTheme;
  },
  yellow: () => {
    const yellowTheme = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: colors.red[900],
        },
        secondary: {
          main: colors.yellow[400],
        },
        info: {
          main: "#064663",
        },
        error: {
          main: colors.purple[500],
        },
        background: {
          default: "#252525",
        },
      },
    });
    return yellowTheme;
  },
  orange: () => {
    const orangeTheme = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: colors.blue[800],
        },
        secondary: {
          main: colors.orange[400],
        },
        info: {
          main: "#064663",
        },
        error: {
          main: "#A62349",
        },
        background: {
          default: "#252525",
        },
      },
    });
    return orangeTheme;
  },
};

export default themes;
