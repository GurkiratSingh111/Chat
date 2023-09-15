import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Background from './components/Background';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background/>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);


