// src/pages/Despacho.tsx
import React from 'react';
import Layout from '../components/Layout';
import VentasList from '../components/venta/VentasList';

const DespachoPage: React.FC = () => {

  return (
    <Layout>
        <VentasList />
    </Layout>
  );
};

export default DespachoPage;
