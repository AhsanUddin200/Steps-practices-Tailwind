import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sheet from './Sheet';
import Services from './Services';
import Blog from './Blog';


import reportWebVitals from './reportWebVitals';
import Pricing from './Pricing';
import Bio from './Bio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Bio />
    <Blog />
    <Sheet />
    <Pricing />
    <Services />
    <App />

    


  
    
  </React.StrictMode>
);

reportWebVitals();
