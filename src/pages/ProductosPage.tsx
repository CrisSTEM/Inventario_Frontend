// src/pages/Productos.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductosComponent from '../components/producto/ProductosComponent';
import CreateProductoComponent from '../components/producto/CreateProductoForm';

const ProductosPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Layout>
        <button 
          onClick={toggleForm}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showForm ? 'Ocultar Formulario' : 'Agregar Producto'}
        </button>
        {showForm && <CreateProductoComponent />}
        <ProductosComponent />
    </Layout>
  );
};

export default ProductosPage;
