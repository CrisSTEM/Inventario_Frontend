// useCreateUsuario.ts
import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

// Define la estructura de los datos del usuario para la creación.
interface UserData {
    nombre: string;
    email: string;
    password: string;
}

// Hook personalizado para crear un usuario.
const useCreateUser = () => {
    // Estado para manejar los errores.
    const [error, setError] = useState<Error | null>(null);
    // Estado para indicar si la creación fue exitosa.
    const [isSuccess, setIsSuccess] = useState(false);

    // Función para crear un usuario.
    const createUser = async (userData: UserData) => {
        try {
            // Llama al servicio de usuario para crear un nuevo usuario.
            await usuarioService.createUsuario(userData);
            // Establece el estado de éxito en verdadero si la creación es exitosa.
            setIsSuccess(true);
        } catch (error) {
            // Captura y maneja los errores.
            if (error instanceof Error) {
                setError(error);
            }
            // Establece el estado de éxito en falso en caso de error.
            setIsSuccess(false);
        }
    };

    // Devuelve las funciones y estados para ser utilizados en componentes.
    return { createUser, error, isSuccess };
};

export default useCreateUser;