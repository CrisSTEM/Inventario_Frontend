import { useState, useEffect } from 'react';
import ventaService, { Venta }from '../../services/ventaService';

const useGetAllVentas = () => {
    const [ventas, setVentas] = useState<Venta[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchVentas = async () => {
            try {
                const data = await ventaService.getAllVentas();
                setVentas(data);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchVentas();
    }, []);

    return { ventas, error };
};

export default useGetAllVentas;
