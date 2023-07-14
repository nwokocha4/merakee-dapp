import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from 'web3uikit';
import { ThirdwebProvider } from "@thirdweb-dev/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThirdwebProvider activeChain="goerli">
    <NotificationProvider>
      
    <App />
    
    </NotificationProvider>
    </ThirdwebProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
