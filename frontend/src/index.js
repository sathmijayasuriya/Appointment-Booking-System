import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { authRouter } from './routes/routes';
import { ThemeProvider } from '@mui/system';
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Theme from './Theme/Theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}>
      <Provider store={store}>

    <RouterProvider router = {authRouter} />
    </Provider>
        </ThemeProvider>

  </React.StrictMode>
);


