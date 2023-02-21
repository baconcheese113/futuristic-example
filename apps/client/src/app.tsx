import { ThemeProvider } from '@emotion/react';
import { Text } from '@futuristic-example/common';
import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Grid,
  Toolbar,
} from '@mui/material';

import { TodoList } from './todo-list';

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#222',
    },
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Text header value="Todos" />
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center">
          <Grid xs={6}>
            <TodoList title="All Todos" />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
