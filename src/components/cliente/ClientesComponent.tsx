// ClientesComponent.tsx
import React from 'react';
import useGetAllClientes from '../../hook/cliente/useGetAllClientes';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const ClientesComponent: React.FC = () => {
    const { clientes, loading, error } = useGetAllClientes();

    if (loading) {
        return <div className="text-center text-blue-500">Cargando clientes...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            id
                        </th>
                        <th scope="col" className="py-3 px-6">
                            nombre
                        </th>
                        <th scope="col" className="py-3 px-6">
                            rif
                        </th>
                        <th scope="col" className="py-3 px-6">
                            direccion
                        </th>
                        <th scope="col" className="py-3 px-6">
                            telefono
                        </th>
                        <th scope="col" className="py-3 px-6">
                            vendedor
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={cliente.id}>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {cliente.id}
                            </th>
                            <td className="py-4 px-6">
                                {cliente.nombre}
                            </td>
                            <td className="py-4 px-6">
                                {cliente.rif}
                            </td>
                            <td className="py-4 px-6">
                                {cliente.direccion}
                            </td>
                            <td className="py-4 px-6">
                                {cliente.telefono}
                            </td>
                            <td className="py-4 px-6">
                                {cliente.vendedor}
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex space-x-2">
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        <FiEye />
                                    </a>
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        <FiEdit />
                                    </a>
                                    <a href="#" className="text-red-500 hover:text-red-700">
                                        <FiTrash2 />
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientesComponent;
