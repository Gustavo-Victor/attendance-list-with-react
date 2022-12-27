import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './styles/global.css';

ReactDOM.createRoot(document.querySelector('#root'))
.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)