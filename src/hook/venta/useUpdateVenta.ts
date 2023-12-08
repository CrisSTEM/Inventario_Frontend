// useUpdateVenta.ts
import { useState } from 'react';
import ventaService, { Venta, VentaResponse } from '../../services/ventaService';

const useUpdateVenta = () => {
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const updateVenta = async (id: number, ventaData: Partial<Venta>) => {
        try {
            const data = await ventaService.updateVenta(id, ventaData);
            setResponse(data);
        } catch (error) {
            setError(error as Error);
        }
    };

    return { updateVenta, response, error };
};

export default useUpdateVenta;
