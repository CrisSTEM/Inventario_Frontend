// Importando React y hooks de React
import React, { useEffect, useState } from 'react';

// Importando un hook personalizado para obtener los detalles de una venta por su ID
import useGetVentaById from '../../hook/venta/useGetVentaById';

// Definiendo las propiedades que se esperan en el componente VentaDetails
interface VentaDetailsProps {
    ventaId: number;
}

// Componente funcional VentaDetails
const VentaDetails: React.FC<VentaDetailsProps> = ({ ventaId }) => {
    // Estado local para almacenar y manejar el ID de la venta
    const [localVentaId, setLocalVentaId] = useState<number>(ventaId);

    // Usando el hook personalizado para obtener la venta por su ID
    // y manejar un posible error
    const { venta, error } = useGetVentaById(localVentaId);

    // useEffect para actualizar el ID local de la venta cuando el prop ventaId cambia
    useEffect(() => {
        setLocalVentaId(ventaId);
    }, [ventaId]);

    // Renderizando el componente
    return (
        <div>
            <h2>Detalle de la Venta</h2>
            {/* Condición para mostrar los detalles de la venta si existe */}
            {venta && (
                <div>
                    <h3>Venta ID: {venta.id_cliente}</h3>
                    <p>Fecha: {venta.fecha}</p>
                    <p>Total: {venta.total}</p>
                    <p>ID Usuario: {venta.id_usuario}</p>
                    <p>ID Cliente: {venta.id_cliente}</p>
                </div>
            )}
            {/* Condición para mostrar un mensaje de error si existe */}
            {error && <p>Ha ocurrido un error: {error.message}</p>}
        </div>
    );
};

// Exportando el componente para su uso en otros archivos
export default VentaDetails;
