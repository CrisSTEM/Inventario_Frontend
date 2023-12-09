// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientesPage from './pages/ClientesPage';
import ProductosPage from './pages/ProductosPage';
import PedidosPage from './pages/PedidosPage';
import DespachoPage from './pages/DespachoPage';
import Login from './pages/LoginPage';
import Register from './components/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/despacho" element={<DespachoPage />} /> 
        <Route path="/salir" element={<HomePage />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;