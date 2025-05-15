import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create the theme context
export const ThemeContext = createContext({
  theme: {},
  setMode: () => {},
});

// Theme provider component
export const CustomThemeProvider = ({ children }) => {
  // Check local storage for saved mode, default to 'light'
  const savedMode = localStorage.getItem('currentMode') || 'light';
  const [mode, setMode] = useState(savedMode);

  // Generate theme based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode colors
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#9c27b0',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#333333',
                  secondary: '#666666',
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#ce93d8',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#b0b0b0',
                },
              }),
        },
      }),
    [mode]
  );

  // Context value
  const contextValue = {
    theme,
    setMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};