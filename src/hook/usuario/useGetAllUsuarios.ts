// useGetAllUsuarios.ts
import { useState, useEffect } from 'react';
import usuarioService from '../../services/usuarioService';

// Tipo de dato para manejar los errores.
type ErrorType = string;

// Define la estructura de los datos del usuario.
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Hook personalizado para obtener todos los usuarios.
const useGetAllUsers = () => {
    // Estado para almacenar la lista de usuarios.
    const [users, setUsers] = useState<Usuario[]>([]);
    // Estado para indicar si está cargando la información.
    const [loading, setLoading] = useState(true);
    // Estado para manejar los errores.
    const [error] = useState<ErrorType | null>(null);

    // Efecto para cargar los usuarios al montar el componente.
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Llama al servicio de usuario para obtener todos los usuarios.
                const data = await usuarioService.getAllUsuarios();
                // Actualiza el estado con los usuarios obtenidos.
                setUsers(data);
            } catch (error) {
                // Captura y maneja los errores.
                console.error('Error al obtener usuarios', error);
                throw error instanceof Error ? error.message : 'Un error desconocido ocurrió';
            } finally {
                // Establece el estado de carga en falso una vez finalizada la operación.
                setLoading(false);
            }
        };

        // Ejecuta la función de carga de usuarios.
        fetchUsers();
    }, []);

    // Devuelve los estados y funciones para ser utilizados en componentes.
    return { users, loading, error };
};

export default useGetAllUsers;