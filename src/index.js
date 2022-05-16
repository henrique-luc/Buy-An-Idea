import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Providers from './Providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Providers>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Providers>
  </BrowserRouter>
);

