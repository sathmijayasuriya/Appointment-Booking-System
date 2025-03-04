import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#0F4C81', // Primary color (e.g., orange)
      // contrastText: '#f44336', // Text color for primary buttons
    },
    secondary: {
      main: '#0F4C81', // Secondary color (e.g., light blue)
    //   contrastText: '#ffffff', // Text color for secondary buttons
    },
    error: {
      main: 'rgba(0, 0, 0, 0)', // Transparent color using rgba
    },
    warning: {
      main: '#ff9800', // Warning color (e.g., amber)
    },
    info: {
      main: '#2196f3', // Info color (e.g., blue)
    },
    success: {
      main: '#4caf50', // Success color (e.g., green)
    },
    background: {
      default: '#f4f4f4', // Background color for the app
      paper: '#ffffff', // Background color for cards, modals, etc.
    },
    text: {
      primary: '#000000', // Default text color
      secondary: '#757575', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // Set Poppins as default font
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // Customize specific headers if needed
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: "155px",
          borderColor: "white",  // Apply border color globally
          color: "white",        // Apply text color globally
          '&:hover': {
            borderColor: "14AE5C", // Apply hover effect globally
            color: "14AE5C",      
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: "20px", // Apply margin for the Tabs
          ".MuiTabs-indicator": {
            display: "none", // Remove the underline
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none", // Optional: Disable uppercase text
          padding: "8px 16px", // Adjust padding for tabs
          "&.Mui-selected": {
            border: "1px solid black", // Add black border to active tab
            borderRadius: "100px", // Optional: Rounded corners for active tab
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'gray', // Default border color
          },
          '&:hover fieldset': {
            borderColor: 'gray', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'gray', // Border color when focused
            borderWidth: '1px', // Border width on focus
          },
        },
      },
    }

  },
});

export default Theme;
