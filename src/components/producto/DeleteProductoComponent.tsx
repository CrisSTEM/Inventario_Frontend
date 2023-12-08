// DeleteProductoComponent.tsx
import React from 'react';
import useDeleteProducto from '../../hook/producto/useDeleteProducto';

interface DeleteProductoComponentProps {
    productoId: number;
    onProductoDeleted?: () => void;
}

const DeleteProductoComponent: React.FC<DeleteProductoComponentProps> = ({ productoId, onProductoDeleted }) => {
    const { deleteProducto, error, loading } = useDeleteProducto();

    const handleDelete = async () => {
        await deleteProducto(productoId);
        if (!error && !loading && onProductoDeleted) {
            onProductoDeleted();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button 
                onClick={handleDelete} 
                disabled={loading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Eliminar Producto
            </button>
            {loading && <p className="mt-4">Eliminando...</p>}
            {error && (
                <p className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    Error: {error}
                </p>
            )}
        </div>
    );
};

export default DeleteProductoComponent;
