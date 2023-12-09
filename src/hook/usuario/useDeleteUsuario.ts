// useDeleteUsuario.ts
import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

// Hook personalizado para eliminar un usuario.
const useDeleteUser = () => {
    // Estado para manejar los errores.
    const [error, setError] = useState<string | null>(null);

    // Función para eliminar un usuario por su ID.
    const deleteUser = async (id: number) => {
        try {
            // Llama al servicio de usuario para eliminar un usuario por su ID.
            await usuarioService.deleteUsuario(id);
        } catch (err) {
            // Captura y maneja los errores, ya sea un error conocido o desconocido.
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    // Devuelve las funciones y estados para ser utilizados en componentes.
    return { deleteUser, error };
};

export default useDeleteUser;