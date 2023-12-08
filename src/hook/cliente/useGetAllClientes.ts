// useGetAllClientes.ts
import { useState, useEffect, useCallback } from 'react';
import clienteService, { Cliente } from '../../services/clienteService';

const useGetAllClientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchClientes = useCallback(async () => {
        try {
            setLoading(true);
            const data = await clienteService.getAllClientes();
            setClientes(data);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    return { clientes, loading, error, refetch: fetchClientes };
};

export default useGetAllClientes;
