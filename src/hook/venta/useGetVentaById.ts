// useGetVentaById.ts
import { useState, useEffect } from 'react';
import ventaService, { Venta } from '../../services/ventaService';

// Este hook personalizado se utiliza para obtener una venta por su ID.
const useGetVentaById = (id: number) => {
    // Estado para almacenar la venta específica y el error
    const [venta, setVenta] = useState<Venta | null>(null);
    const [error, setError] = useState<Error | null>(null);

    // Efecto que se ejecuta cuando el ID cambia
    useEffect(() => {
        // Función asíncrona para obtener una venta por ID
        const fetchVenta = async () => {
            try {
                // Intenta obtener la venta y actualizar el estado
                const data = await ventaService.getVentaById(id);
                setVenta(data);
            } catch (error) {
                // Captura y establece cualquier error que ocurra
                setError(error as Error);
            }
        };

        // Si hay un ID válido, llama a la función de obtención de venta
        if (id) fetchVenta();
    }, [id]);

    // Devuelve la venta y el estado de error
    return { venta, error };
};

export default useGetVentaById;