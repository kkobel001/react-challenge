import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './pages/routing';
import { theme } from 'theme';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
