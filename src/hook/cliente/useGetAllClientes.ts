import { useState, useEffect } from 'react';
import clienteService, { Cliente } from '../../services/clienteService';

const useGetAllClientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const data = await clienteService.getAllClientes();
                setClientes(data);
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

        fetchClientes();
    }, []);

    return { clientes, loading, error };
};

export default useGetAllClientes;
