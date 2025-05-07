import React from 'react';
import ReactDOM from 'react-dom';
/*import '../dist/styles.css';*/
/*import '../src/assets/styles/index.css'*/
import '../src/index.css'

import "@vibe/core/tokens";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
