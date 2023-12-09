// useGetAllVenta.ts
import { useState, useEffect } from 'react';
import ventaService, { Venta }from '../../services/ventaService';

// Este hook personalizado se utiliza para obtener todas las ventas.
const useGetAllVentas = () => {
    // Estado para almacenar todas las ventas y el error
    const [ventas, setVentas] = useState<Venta[]>([]);
    const [error, setError] = useState<Error | null>(null);

    // Efecto que se ejecuta al montar el componente
    useEffect(() => {
        // Función asíncrona para obtener todas las ventas
        const fetchVentas = async () => {
            try {
                // Intenta obtener las ventas y actualizar el estado
                const data = await ventaService.getAllVentas();
                setVentas(data);
            } catch (error) {
                // Captura y establece cualquier error que ocurra
                setError(error as Error);
            }
        };

        // Llama a la función de obtención de ventas
        fetchVentas();
    }, []);

    // Devuelve las ventas y el estado de error
    return { ventas, error };
};

export default useGetAllVentas;