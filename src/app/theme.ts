import { createTheme } from "@mui/material/styles";
//https://mui.com/material-ui/customization/theming/

declare module "@mui/material/styles" {
  interface Theme {
    white: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    white?: {
      main?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#003740",
      light: "#ffa2a3",
      dark: "#a34449",
    },
    secondary: {
      main: "#b15a5e",
    },
  },
  white: {
    main: "#ffff",
  },
});

export default theme;
