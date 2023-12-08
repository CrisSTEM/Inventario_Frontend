// useDeleteUsuario.ts
import { useState } from 'react';
import usuarioService from '../../services/usuarioService';

const useDeleteUser = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteUser = async (id: number) => {
        try {
            await usuarioService.deleteUsuario(id);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un error desconocido');
            }
        }
    };

    return { deleteUser, error };
};

export default useDeleteUser;
