// useCreateCliente.ts
import { useState } from 'react';
import clienteService, { Cliente } from '../../services/clienteService';

// Custom hook para crear un cliente
const useCreateCliente = () => {
    // Estado para manejar errores
    const [error, setError] = useState<string | null>(null);

    // Función para crear un cliente
    const createCliente = async (clienteData: Cliente) => {
        try {
            // Intenta crear un cliente con los datos proporcionados
            const newCliente = await clienteService.createCliente(clienteData);
            return newCliente;
        } catch (err) {
            // Maneja cualquier error que pueda ocurrir y establece el mensaje de error
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    // Devuelve la función de creación y el estado de error
    return { createCliente, error };
};

export default useCreateCliente;