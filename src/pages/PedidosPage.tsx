// src/pages/Pedidos.tsx
import React from 'react';
import Layout from '../components/Layout';
import ProductosComponent from '../components/ProductosComponent';

const PedidosPage: React.FC = () => {
  return (
    <Layout>
      <ProductosComponent />
    </Layout>
  );
};

export default PedidosPage;
