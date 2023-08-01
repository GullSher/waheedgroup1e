import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './AssetsMain/Css/plugins.css';
import './AssetsMain/Css/styles-5.css';
import 'toastr/build/toastr.min.css';
import './AssetsMain/Css/style.css';
import './AssetsMain/Css/default.css';
import '../src/AssetsMain/Css/Pages.css';
import '../src/AssetsMain/Css/plugins.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
