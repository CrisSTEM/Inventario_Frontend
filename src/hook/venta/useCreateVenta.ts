// useCreateVenta.ts
import { useState } from 'react';
import ventaService, { Venta, VentaResponse } from '../../services/ventaService';

// Este hook personalizado se utiliza para crear una nueva venta.
const useCreateVenta = () => {
    // Estado para almacenar la respuesta y el error
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    // Función asíncrona para crear una venta
    const createVenta = async (ventaData: Venta) => {
        try {
            // Intenta crear la venta y actualizar el estado con la respuesta
            const data = await ventaService.createVenta(ventaData);
            setResponse(data);
        } catch (error) {
            // Captura y establece cualquier error que ocurra
            setError(error as Error);
        }
    };

    // Devuelve la función de creación y los estados de respuesta y error
    return { createVenta, response, error };
};

export default useCreateVenta;