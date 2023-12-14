import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store } from './app/store';
import App from './App';
import './index.css';
import { CssBaseline } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

const defaultTheme = createTheme();

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
      <Router>
      <App />
      </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
