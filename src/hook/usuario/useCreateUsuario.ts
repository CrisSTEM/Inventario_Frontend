import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

interface UserData {
    nombre: string;
    email: string;
    password: string;
}

const useCreateUser = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const createUser = async (userData: UserData) => {
        try {
            await usuarioService.createUsuario(userData);
            setIsSuccess(true);
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            }
            setIsSuccess(false);
        }
    };

    return { createUser, error, isSuccess };
};

export default useCreateUser;
