import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ShowProvider } from './context/shows.context.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowProvider>
        <App />
      </ShowProvider>
    </BrowserRouter>
  </React.StrictMode>
);
