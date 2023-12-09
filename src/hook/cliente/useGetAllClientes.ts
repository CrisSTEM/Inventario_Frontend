// useGetAllClientes.ts
import { useState, useEffect, useCallback } from 'react';
import clienteService, { Cliente } from '../../services/clienteService';

// Custom hook para obtener todos los clientes
const useGetAllClientes = () => {
    // Estados para manejar los clientes, carga y errores
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Función para obtener todos los clientes
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

    // Efecto para llamar a la función de obtención en la montura del componente
    useEffect(() => {
        fetchClientes();
    }, [fetchClientes]);

    // Devuelve los clientes, estados de carga y error, y la función para refrescar los datos
    return { clientes, loading, error, refetch: fetchClientes };
};

export default useGetAllClientes;