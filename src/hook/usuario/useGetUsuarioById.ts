// useGetUsuarioById.ts
import { useState, useEffect } from 'react';
import usuarioService from '../../services/usuarioService';

const useGetUserById = (id: number) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await usuarioService.getUsuarioById(id);
                setUser(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false);
            }
        };
    
        fetchUser();
    }, [id]);

    return { user, loading, error };
};

export default useGetUserById;
