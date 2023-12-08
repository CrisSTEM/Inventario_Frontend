// src/pages/ClientesPage.tsx
import React from 'react';
import Layout from '../components/Layout';

const ClientesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold my-6">Clientes</h1>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="search"
            type="text"
            placeholder="Buscar:"
          />
        </div>
        <div className="flex justify-end mb-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            + Agregar un cliente
          </button>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">id</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">nombre</th>
                {/* Más encabezados de columna aquí */}
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">1</td>
                <td className="py-4 px-6 border-b border-grey-light">Ash</td>
                {/* Más celdas de datos aquí */}
              </tr>
              {/* Más filas aquí */}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">
            Mostrando página 1 de 3
          </span>
          <div>
            <button className="text-sm mx-2">Anterior</button>
            {/* Números de página aquí */}
            <button className="text-sm mx-2">Siguiente</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientesPage;
