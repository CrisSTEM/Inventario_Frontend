import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import configureAxios from './axiosConfig'; // Importa la función de configuración

configureAxios(); // Ejecuta la función para configurar Axios

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
