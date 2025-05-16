export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#F4F2ED", 
            paper: "#fff",
          },
        }
      : {
          background: {
            default: "#121212",
            paper: "#1d1d1d",
          },
        }),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F4F2ED !important",
          color: "#000000", 
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#F4F2ED", 
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000000", 
        },
      },
    },
  },
});
