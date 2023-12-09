// VentasList.tsx
import React, { useState } from 'react';
import useGetAllVentas from '../../hook/venta/useGetAllVentas';
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';
import DeleteVentaComponent from './DeleteVentaComponent';
import UpdateVentaForm from './UpdateVentaForm';
import VentaDetails from './VentaDetails';

interface Venta {
    id: number;
    fecha: string;
    total: number;
    id_usuario: number;
    id_cliente: number;
    // Otros campos según necesidad
}

const VentasList: React.FC = () => {
    const { ventas, error } = useGetAllVentas();
    const [selectedVenta, setSelectedVenta] = useState<Venta | null>(null);
    const [ventaDetailsId, setVentaDetailsId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (venta: Venta) => {
        setSelectedVenta(venta);
    };

    const handleViewDetailsClick = (ventaId: number) => {
        setVentaDetailsId(ventaId);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    

    if (error) {
        return <div className="text-center text-red-500">Error al cargar las ventas: {error.message}</div>;
    }

    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">Fecha</th>
                            <th scope="col" className="py-3 px-6">Total</th>
                            <th scope="col" className="py-3 px-6">ID Usuario</th>
                            <th scope="col" className="py-3 px-6">ID Cliente</th>
                            <th scope="col" className="py-3 px-6">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                <td className="py-4 px-6">{venta.fecha}</td>
                                <td className="py-4 px-6">${venta.total}</td>
                                <td className="py-4 px-6">{venta.id_usuario}</td>
                                <td className="py-4 px-6">{venta.id_cliente}</td>
                                <td className="py-4 px-6">
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleViewDetailsClick(venta.id)} className="text-blue-500 hover:text-blue-700">
                                            <FiEye />
                                        </button>
                                        <button onClick={() => handleEditClick(venta)} className="text-blue-500 hover:text-blue-700">
                                            <FiEdit />
                                        </button>
                                        <DeleteVentaComponent ventaId={venta.id}>
                                            <FiTrash2 />
                                        </DeleteVentaComponent>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedVenta && (
                <UpdateVentaForm
                    initialVentaData={selectedVenta}
                    onUpdate={() => {/* Código para manejar la actualización */}}
                />
            )}
{isModalOpen && ventaDetailsId != null && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
                <VentaDetails ventaId={ventaDetailsId} />
                <button onClick={handleCloseModal} className="mt-3 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Cerrar
                </button>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default VentasList;
