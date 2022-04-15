import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './ProductContext';

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  </ProductProvider>,
  document.getElementById('root')
);

