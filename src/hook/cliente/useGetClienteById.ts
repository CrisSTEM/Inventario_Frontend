// useGetClienteById.ts
import { useState, useEffect } from 'react';
import clienteService, { Cliente }from '../../services/clienteService';

const useGetClienteById = (id: number) => {
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    return { cliente, loading, error };
};

export default useGetClienteById;