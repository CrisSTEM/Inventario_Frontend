// DeleteVentaComponent.tsx
import React, { useState, ReactNode } from 'react';
import useDeleteVenta from '../../hook/venta/useDeleteVenta';

interface DeleteVentaComponentProps {
    ventaId: number;
    children?: ReactNode;
}

const DeleteVentaComponent: React.FC<DeleteVentaComponentProps> = ({ ventaId, children }) => {
    const { deleteVenta, response, error } = useDeleteVenta();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de querer eliminar esta venta?')) {
            setIsDeleting(true);
            await deleteVenta(ventaId);
            setIsDeleting(false);
        }
    };

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
