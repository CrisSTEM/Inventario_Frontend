// useUpdateCliente.ts
import { useState } from 'react';
import clienteService from '../../services/clienteService';

interface UpdateClienteData {
    nombre?: string;
    direccion?: string;
    telefono?: string;
    vendedor?: string;
}

const useUpdateCliente = () => {
    const [error, setError] = useState<string | null>(null);

    const updateCliente = async (id: number, clienteData: UpdateClienteData) => {
        try {
            const updatedCliente = await clienteService.updateCliente(id, clienteData);
            return updatedCliente;
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    return { updateCliente, error };
};

export default useUpdateCliente;
