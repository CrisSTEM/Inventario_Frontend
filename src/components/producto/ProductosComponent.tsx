// ProductosComponent.tsx
import React, { useState } from 'react';
import useGetAllProductos from '../../hook/producto/useGetAllProductos';
import DeleteProductoComponent from './DeleteProductoComponent';
import UpdateProductoForm from './UpdateProductoForm';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import ProductoDetalle from './ProductoDetalle';

const ProductosComponent: React.FC = () => {
    const { productos, loading, error, refetch } = useGetAllProductos();
    const [deleteProductoId, setDeleteProductoId] = useState<number | null>(null);
    const [editProductoId, setEditProductoId] = useState<number | null>(null);
    const [viewProductoId, setViewProductoId] = useState<number | null>(null);

    const handleViewClick = (id: number) => {
        setViewProductoId(id);
    };

    const handleEditClick = (id: number | undefined) => {
        if (id !== undefined) {
            setEditProductoId(id);
        } else {
            console.error('Intento de editar un producto sin ID');
        }
    };

    const handleDeleteClick = (id: number | undefined) => {
        if (id !== undefined) {
            if (deleteProductoId === id) {
                setDeleteProductoId(null);
            } else {
                setDeleteProductoId(id);
            }
        } else {
            console.error('Intento de eliminar un producto sin ID');
        }
    };

    if (loading) {
        return <div className="text-center text-blue-500">Cargando productos...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    const onProductoDeleted = () => {
        setDeleteProductoId(null);
        refetch();
    };

    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">id</th>
                            <th scope="col" className="py-3 px-6">nombre</th>
                            <th scope="col" className="py-3 px-6">código</th>
                            <th scope="col" className="py-3 px-6">existencia</th>
                            <th scope="col" className="py-3 px-6">precio</th>
                            <th scope="col" className="py-3 px-6">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={producto.id}>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {producto.id}
                                </th>
                                <td className="py-4 px-6">{producto.nombre}</td>
                                <td className="py-4 px-6">{producto.codigo}</td>
                                <td className="py-4 px-6">{producto.existencia}</td>
                                <td className="py-4 px-6">${producto.precio}</td>
                                <td className="py-4 px-6">
                                    <div className="flex space-x-2">
                                        <a href="#" className="text-blue-500 hover:text-blue-700" onClick={() => handleViewClick(producto.id)}>
                                            <FiEye />
                                        </a>
                                        <a href="#" className="text-blue-500 hover:text-blue-700" onClick={() => handleEditClick(producto.id)}>
                                            <FiEdit />
                                        </a>
                                        <a href="#" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteClick(producto.id)}>
                                            <FiTrash2 />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deleteProductoId !== null && (
                <DeleteProductoComponent
                    productoId={deleteProductoId}
                    onProductoDeleted={onProductoDeleted}
                />
            )}
            {editProductoId !== null && (
                <UpdateProductoForm
                    productoId={editProductoId}
                    // Asegúrate de agregar las props necesarias aquí
                />
            )}
            {viewProductoId !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
                    <div className="bg-white p-4 rounded">
                        <ProductoDetalle id={viewProductoId} />
                        <button onClick={() => setViewProductoId(null)} className="mt-2 p-2 bg-red-500 text-white rounded">Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductosComponent;
