// VentaDetails.tsx
import React, { useEffect, useState } from 'react';
import useGetVentaById from '../../hook/venta/useGetVentaById';

interface VentaDetailsProps {
    ventaId: number;
}

const VentaDetails: React.FC<VentaDetailsProps> = ({ ventaId }) => {
    const [localVentaId, setLocalVentaId] = useState<number>(ventaId);
    const { venta, error } = useGetVentaById(localVentaId);

    useEffect(() => {
        setLocalVentaId(ventaId);
    }, [ventaId]);

    return (
        <div>
            <h2>Detalle de la Venta</h2>
            {venta && (
                <div>
                    <h3>Venta ID: {venta.id_cliente}</h3>
                    <p>Fecha: {venta.fecha}</p>
                    <p>Total: {venta.total}</p>
                    <p>ID Usuario: {venta.id_usuario}</p>
                    <p>ID Cliente: {venta.id_cliente}</p>
                </div>
            )}
            {error && <p>Ha ocurrido un error: {error.message}</p>}
        </div>
    );
};

export default VentaDetails;
