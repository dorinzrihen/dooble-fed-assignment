import { createTheme } from '@mui/material';

const colors = {
  activeBackground: '#97CE4C',
};

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colors.activeBackground,
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.activeBackground,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colors.activeBackground,
          },
          '&.Mui-focused .MuiInput-underline:before': {
            borderBottomColor: colors.activeBackground,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          width: '100px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: colors.activeBackground,
          '&:hover': {
            backgroundColor: colors.activeBackground,
          },
        },
        containedSizeLarge: {
          fontSize: '18px',
          padding: '12px 24px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.activeBackground,
          '&:hover': {
            backgroundColor: colors.activeBackground,
          },
        },
      },
    },
  },
});

export default theme;
