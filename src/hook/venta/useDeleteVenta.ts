// useDeleteVenta.ts
import { useState } from 'react';
import ventaService, { VentaResponse } from '../../services/ventaService';

// Este hook personalizado se utiliza para eliminar una venta.
const useDeleteVenta = () => {
    // Estado para almacenar la respuesta y el error
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    // Función asíncrona para eliminar una venta
    const deleteVenta = async (id: number) => {
        try {
            // Intenta eliminar la venta y actualizar el estado con la respuesta
            const data = await ventaService.deleteVenta(id);
            setResponse(data);
        } catch (error) {
            // Captura y establece cualquier error que ocurra
            setError(error as Error);
        }
    };

    // Devuelve la función de eliminación y los estados de respuesta y error
    return { deleteVenta, response, error };
};

export default useDeleteVenta;