import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import InfoRouteComponent from './Routes/InfoRouteComponent';
import MainPageComponent from './Routes/MainPageComponent';
import ProductsShowcaseComponent from './Routes/ProductsShowcaseComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#058505',
    },
    secondary: {
      main: '#b90f06',
    },
    gray: {
      main: '#282c34',
    },
  },
});

ReactDOM.render(

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="info" element={<InfoRouteComponent/>}/>
          <Route path="main" element={<MainPageComponent/>}/>
          <Route path="products" element={<ProductsShowcaseComponent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
