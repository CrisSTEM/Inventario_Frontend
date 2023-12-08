// DeleteVentaComponent.tsx
import React, { useState } from 'react';
import useDeleteVenta from '../../hook/venta/useDeleteVenta';

interface DeleteVentaComponentProps {
    ventaId: number;
}

const DeleteVentaComponent: React.FC<DeleteVentaComponentProps> = ({ ventaId }) => {
    const { deleteVenta, response, error } = useDeleteVenta();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if(window.confirm('¿Estás seguro de querer eliminar esta venta?')) {
            setIsDeleting(true);
            await deleteVenta(ventaId);
            setIsDeleting(false);
        }
    };

    return (
        <div>
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Eliminando...' : 'Eliminar Venta'}
            </button>
            {response && <p>{response.mensaje}</p>}
            {error && <p>Error al eliminar la venta: {error.message}</p>}
        </div>
    );
};

export default DeleteVentaComponent;
