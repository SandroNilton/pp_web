import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'

import "@vibe/core/tokens";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './components/common/toast/ToastManager';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
