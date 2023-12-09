// useDeleteCliente.ts
import { useState } from 'react';
import clienteService from '../../services/clienteService';

// Custom hook para eliminar un cliente
const useDeleteCliente = () => {
    // Estado para manejar errores
    const [error, setError] = useState<string | null>(null);

    // Función para eliminar un cliente por su ID
    const deleteCliente = async (id: number) => {
        try {
            // Intenta eliminar el cliente
            await clienteService.deleteCliente(id);
        } catch (err) {
            // Maneja cualquier error que pueda ocurrir
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    // Devuelve la función de eliminación y el estado de error
    return { deleteCliente, error };
};

export default useDeleteCliente;