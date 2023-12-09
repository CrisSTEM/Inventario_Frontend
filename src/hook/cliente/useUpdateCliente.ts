// useUpdateCliente.ts
import { useState } from 'react';
import clienteService from '../../services/clienteService';

// Tipo para los datos de actualización de un cliente
interface UpdateClienteData {
    nombre?: string;
    direccion?: string;
    telefono?: string;
    vendedor?: string;
}

// Custom hook para actualizar un cliente
const useUpdateCliente = () => {
    // Estado para manejar errores
    const [error, setError] = useState<string | null>(null);

    // Función para actualizar un cliente
    const updateCliente = async (id: number, clienteData: UpdateClienteData) => {
        try {
            // Intenta actualizar el cliente con los nuevos datos
            const updatedCliente = await clienteService.updateCliente(id, clienteData);
            return updatedCliente;
        } catch (err) {
            // Maneja cualquier error que pueda ocurrir
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    // Devuelve la función de actualización y el estado de error
    return { updateCliente, error };
};

export default useUpdateCliente;