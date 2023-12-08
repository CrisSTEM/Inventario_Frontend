import { useState } from 'react';
import ventaService, { Venta, VentaResponse } from '../../services/ventaService';

const useCreateVenta = () => {
    const [response, setResponse] = useState<VentaResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const createVenta = async (ventaData: Venta) => {
        try {
            const data = await ventaService.createVenta(ventaData);
            setResponse(data);
        } catch (error) {
            setError(error as Error);
        }
    };

    return { createVenta, response, error };
};

export default useCreateVenta;
