import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context/ContextProvider';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
