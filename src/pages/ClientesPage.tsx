// src/pages/ClientesPage.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ClientesComponent from '../components/cliente/ClientesComponent';
import CreateClienteForm from '../components/cliente/CreateClienteForm'; // Asegúrate de tener la ruta correcta

const ClientesPage: React.FC = () => {
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
          {showForm ? 'Ocultar Formulario' : 'Agregar Cliente'}
        </button>

        <ClientesComponent />
        {showForm && <CreateClienteForm />}
    </Layout>
  );
};

export default ClientesPage;
