// useCreateCliente.ts
import { useState } from 'react';
import clienteService, { Cliente } from '../../services/clienteService';

const useCreateCliente = () => {
    const [error, setError] = useState<string | null>(null);

    const createCliente = async (clienteData: Cliente) => {
        try {
            const newCliente = await clienteService.createCliente(clienteData);
            return newCliente;
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                setError('Ocurrió un error desconocido');
            }
        }
    };

    return { createCliente, error };
};

export default useCreateCliente;
