// VentaDetails.tsx
import React, { useState } from 'react';
import useGetVentaById from '../../hook/venta/useGetVentaById';

const VentaDetails: React.FC = () => {
    const [ventaId, setVentaId] = useState<number>(0);
    const { venta, error } = useGetVentaById(ventaId);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVentaId(Number(e.target.value));
    };

    return (
        <div>
            <h2>Detalle de la Venta</h2>
            <input type="number" value={ventaId} onChange={handleInputChange} placeholder="Ingrese ID de Venta" />
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
