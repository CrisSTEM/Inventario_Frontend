// DeleteVentaComponent.tsx
import React, { useState, ReactNode } from 'react';
import useDeleteVenta from '../../hook/venta/useDeleteVenta';

// Este es un componente para eliminar una venta.
interface DeleteVentaComponentProps {
    ventaId: number;
    children?: ReactNode;
}

const DeleteVentaComponent: React.FC<DeleteVentaComponentProps> = ({ ventaId, children }) => {
    // useDeleteVenta es un hook personalizado para manejar la eliminación de ventas.
    const { deleteVenta, response, error } = useDeleteVenta();

    // Estado para manejar si se está eliminando la venta.
    const [isDeleting, setIsDeleting] = useState(false);

    // Función para manejar la eliminación de la venta.
    const handleDelete = async () => {
        // Confirma si el usuario realmente quiere eliminar la venta.
        if (window.confirm('¿Estás seguro de querer eliminar esta venta?')) {
            setIsDeleting(true); // Activa el estado de eliminación.
            await deleteVenta(ventaId); // Llama al hook personalizado para eliminar la venta.
            setIsDeleting(false); // Desactiva el estado de eliminación.
        }
    };

    // Renderiza el botón de eliminar y muestra la respuesta o error del hook useDeleteVenta.
    return (
        <div>
            <button onClick={handleDelete} disabled={isDeleting} className="text-red-500 hover:text-red-700">
                {isDeleting ? 'Eliminando...' : children}
            </button>
            {response && <p>{response.mensaje}</p>}
            {error && <p>Error al eliminar la venta: {error.message}</p>}
        </div>
    );
};

export default DeleteVentaComponent;