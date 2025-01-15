import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js"

import * as atatus from 'atatus-spa';
atatus.config('13d0583355124d65a8aa028b252bb0e1').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
serviceWorkerRegistration.register();