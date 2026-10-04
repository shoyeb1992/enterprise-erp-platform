import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#7b1fa2",
    },
    background: {
      default: "#f5f7fb",
    },
  },

  typography: {
    fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
