// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Importa otros componentes de página aquí

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<HomePage />} />
        <Route path="/productos" element={<HomePage />} />
        <Route path="/pedidos" element={<HomePage />} />
        <Route path="/despacho" element={<HomePage />} /> 
        <Route path="/salir" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;