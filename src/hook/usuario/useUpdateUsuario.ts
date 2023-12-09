// useUpdateUsuario.ts
import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

// Define la estructura de los datos del usuario para la actualización.
type UserData = {
    nombre?: string;
    email?: string;
    password?: string;
};

// Hook personalizado para actualizar un usuario.
const useUpdateUser = () => {
    // Estado para manejar los errores.
    const [error, setError] = useState<Error | null>(null);
    // Estado para indicar si la actualización fue exitosa.
    const [isSuccess, setIsSuccess] = useState(false);

    // Función para actualizar un usuario.
    const updateUser = async (id: number, userData: UserData) => {
        try {
            // Llama al servicio de usuario para actualizar un usuario por su ID.
            await usuarioService.updateUsuario(id, userData);
            // Establece el estado de éxito en verdadero si la actualización es exitosa.
            setIsSuccess(true);
        } catch (error) {
            // Captura y maneja los errores, ya sea un error conocido o desconocido.
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error('Se produjo un error desconocido'));
            }
            // Establece el estado de éxito en falso en caso de error.
            setIsSuccess(false);
        }
    };

    // Devuelve las funciones y estados para ser utilizados en componentes.
    return { updateUser, error, isSuccess };
};

export default useUpdateUser;