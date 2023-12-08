import { useState } from 'react';
import clienteService from '../../service/clienteService';

const useDeleteCliente = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteCliente = async (id: number) => {
        try {
            await clienteService.deleteCliente(id);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    return { deleteCliente, error };
};

export default useDeleteCliente;
