// useGetClienteById.ts
import { useState, useEffect } from 'react';
import clienteService, { Cliente }from '../../services/clienteService';

// Custom hook para obtener un cliente por su ID
const useGetClienteById = (id: number) => {
    // Estados para manejar el cliente, carga y errores
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Efecto para obtener el cliente al cambiar el ID
    useEffect(() => {
        const fetchCliente = async () => {
            if (!id) return;

            try {
                const data = await clienteService.getClienteById(id);
                setCliente(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error desconocido');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCliente();
    }, [id]);

    // Devuelve el cliente, estados de carga y error
    return { cliente, loading, error };
};

export default useGetClienteById;