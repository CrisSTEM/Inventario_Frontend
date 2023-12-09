// useUpdateVenta.ts
import { useState } from 'react';
import ventaService, { Venta, VentaResponse } from '../../services/ventaService';

// Este hook personalizado se utiliza para actualizar una venta.
const useUpdateVenta = () => {
    // Estado para almacenar la respuesta y el error
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    // Función asíncrona para actualizar una venta
    const updateVenta = async (id: number, ventaData: Partial<Venta>) => {
        try {
            // Intenta actualizar la venta y actualizar el estado con la respuesta
            const data = await ventaService.updateVenta(id, ventaData);
            setResponse(data);
        } catch (error) {
            // Captura y establece cualquier error que ocurra
            setError(error as Error);
        }
    };

    // Devuelve la función de actualización y los estados de respuesta y error
    return { updateVenta, response, error };
};

export default useUpdateVenta;