// src/pages/Pedidos.tsx
import React from 'react';
import Layout from '../components/Layout';

const PedidosPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold my-6">Pedidos</h1>
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
            + Agregar un pedido
          </button>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  id
                </th>
                {/* Más encabezados de columna aquí */}
              </tr>
            </thead>
            <tbody>
              {/* Aquí vendrían los datos de los pedidos mapeados desde un array por ejemplo */}
              <tr className="hover:bg-gray-100">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  1
                </td>
                {/* Más celdas de datos aquí */}
              </tr>
              {/* Repetir para cada pedido */}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-sm">
            Mostrando página 1 de 3
          </span>
          <div className="inline-flex">
            <button className="text-sm mx-2 px-4 py-2 border rounded">
              Anterior
            </button>
            {/* Números de página aquí */}
            <button className="text-sm mx-2 px-4 py-2 border rounded">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PedidosPage;
