import React from 'react';
import App from './App';
import StoreProvider from './contexts/Store';
import { createRoot } from 'react-dom/client';
import './styles/index.css';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


root.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
