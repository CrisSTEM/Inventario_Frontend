// useUpdateUsuario.ts
import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

type UserData = {
    nombre?: string;
    email?: string;
    password?: string;
};

const useUpdateUser = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateUser = async (id: number, userData: UserData) => {
        try {
            await usuarioService.updateUsuario(id, userData);
            setIsSuccess(true);
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error('Se produjo un error desconocido'));
            }
            setIsSuccess(false);
        }
    };

    return { updateUser, error, isSuccess };
};

export default useUpdateUser;
