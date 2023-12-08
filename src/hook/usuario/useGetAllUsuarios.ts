// useGetAllUsuarios.ts
import { useState, useEffect } from 'react';
import usuarioService from '../../services/usuarioService';

type ErrorType = string;

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<ErrorType | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await usuarioService.getAllUsuarios();
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener usuarios', error);
                throw error instanceof Error ? error.message : 'Un error desconocido ocurrió';
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
};

export default useGetAllUsers;