import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sheet from './Sheet';
import Services from './Services'


import reportWebVitals from './reportWebVitals';
import Pricing from './Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Sheet />
    <Pricing />
    <Services />
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
