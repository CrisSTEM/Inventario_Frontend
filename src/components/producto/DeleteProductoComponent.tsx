// DeleteProductoComponent.tsx

// Importaciones de React y hook personalizado para eliminar productos
import React from 'react';
import useDeleteProducto from '../../hook/producto/useDeleteProducto';

// Definición de las propiedades del componente
interface DeleteProductoComponentProps {
    productoId: number; // ID del producto a eliminar
    onProductoDeleted?: () => void; // Callback opcional a ejecutar después de eliminar el producto
}

// Componente funcional para eliminar un producto
const DeleteProductoComponent: React.FC<DeleteProductoComponentProps> = ({ productoId, onProductoDeleted }) => {
    // Utiliza el hook personalizado que proporciona la funcionalidad para eliminar productos
    const { deleteProducto, error, loading } = useDeleteProducto();

    // Manejador para el evento de clic en el botón de eliminar
    const handleDelete = async () => {
        await deleteProducto(productoId); // Llama a la función de eliminar producto
        if (!error && !loading && onProductoDeleted) {
            onProductoDeleted(); // Ejecuta el callback si no hay error y no está cargando
        }
    };

    // Renderizado del componente
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button 
                onClick={handleDelete} // Evento clic que dispara la eliminación
                disabled={loading} // Deshabilita el botón mientras carga
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Eliminar Producto
            </button>
            {loading && <p className="mt-4">Eliminando...</p>} // Muestra un mensaje durante la carga
            {error && (
                <p className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    Error: {error} // Muestra un mensaje de error si lo hay
                </p>
            )}
        </div>
    );
};

export default DeleteProductoComponent;