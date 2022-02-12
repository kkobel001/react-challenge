import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
      secondary: {
        color: '#333333',
        opacity: '25%',
      },
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      contrastText: '#fff',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontBigSize: '20px',
    fontMedium: '15px',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    h7: {
      fontSize: '4rem',
      lineHeight: '4,8rem',
      letterSpacing: '-1',
      fontWeight: 700,
    },
    h8: {
      fontSize: '1,2rem',
      lineHeight: '1,8rem',
      letterSpacing: '-1',
      opacity: '50%',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey['500'],
          ':hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.primary,
          },
          '&.Mui-selected': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            borderBottom: '2px solid #0666eb',
            color: theme.palette.primary,
          },
          '.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '14px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#33333350',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '40px 32px',
          border: 'none',
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0',
          fontSize: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 'fontWeightRegular',
          fontSize: 'fontMedium',
          lineHeight: '1.3rem',
          height: '34px',
          align: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          marginBottom: '10px',
          marginRight: '20px',
          fontFamily: 'Inter, sans-serif',
          padding: '8px 12px',
          boxShadow: 'none',

          '&:hover,&:active': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.text.secondary,
          },
        },
        '	.MuiButton-endIcon': {
          paddingTop: '6px 0px',
          margin: '0px',
          width: '20px',
          height: '20px',
          minHeight: 0,

          '.MuiButton-startIcon': {
            width: '22px',
            height: '22px',
          },
        },
        '	.MuiButton-outlined': {
          '&.Mui-disabled': {
            backgroundColor: theme.palette.background.main,
          },
        },
        containedPrimary: {
          fontWeight: 'fontWeightRegular',
          '&:hover,&:active': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedError: {
          fontWeight: 'fontWeightRegular',
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          fontWeight: 'fontWeightBold',
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          fontWeight: 'fontWeightBold',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
          },
        },
        outlinedPrimary: {
          fontWeight: 'fontWeightRegular',
          backgroundColor: theme.palette.secondary.main,
          border: 'none',
          '&:hover,&:active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          '&:disabled': {
            backgroundColor: theme.palette.text.secondary,
            border: 'none',
          },
        },
        '.MuiButton-outlinedPrimary': {
          fontWeight: 'fontWeightRegular',
          border: '1px solid theme.palette.error.main',
          '&:hover,&:active': {
            backgroundColor: theme.palette.error.light,
          },
        },
        outlinedSuccess: {
          fontWeight: 'fontWeightBold',
          border: '1px solid theme.palette.success.main',
          '&:hover, &:active': {
            backgroundColor: theme.palette.success.light,
          },
        },
        outlinedWarning: {
          fontWeight: 'fontWeightBold',
          border: '1px solid theme.palette.warning.main ',
          '&:hover, &:active': {
            backgroundColor: theme.palette.warning.light,
          },
        },
      },
    },
  },
});

export { theme };
