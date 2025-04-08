import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <-- ¡esto debe coincidir perfectamente!
import './App.css'; // si existe

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
