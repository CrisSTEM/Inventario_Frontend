// useDeleteVenta.ts
import { useState } from 'react';
import ventaService, { VentaResponse } from '../../services/ventaService';

const useDeleteVenta = () => {
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const deleteVenta = async (id: number) => {
        try {
            const data = await ventaService.deleteVenta(id);
            setResponse(data);
        } catch (error) {
            setError(error as Error);
        }
    };

    return { deleteVenta, response, error };
};

export default useDeleteVenta;
