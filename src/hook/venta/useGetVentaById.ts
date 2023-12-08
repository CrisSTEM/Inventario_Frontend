// useGetVentaById.ts
import { useState, useEffect } from 'react';
import ventaService, { Venta } from '../../services/ventaService';

const useGetVentaById = (id: number) => {
    const [venta, setVenta] = useState<Venta | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchVenta = async () => {
            try {
                const data = await ventaService.getVentaById(id);
                setVenta(data);
            } catch (error) {
                setError(error as Error);
            }
        };

        if (id) fetchVenta();
    }, [id]);

    return { venta, error };
};

export default useGetVentaById;
