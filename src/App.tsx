// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientesPage from './pages/ClientesPage';
import ProductosPage from './pages/ProductosPage';
import PedidosPage from './pages/PedidosPage';
import DespachoPage from './pages/DespachoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/despacho" element={<DespachoPage />} /> 
        <Route path="/salir" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;