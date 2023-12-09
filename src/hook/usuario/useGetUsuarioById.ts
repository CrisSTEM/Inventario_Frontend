// useGetUsuarioById.ts
import { useState, useEffect } from 'react';
import usuarioService from '../../services/usuarioService';

// Define la estructura de los datos del usuario.
interface User {
    nombre: string;
    email: string;
    // Agrega más campos según los datos que esperas recibir
}

// Hook personalizado para obtener un usuario por su ID.
const useGetUserById = (id: number) => {
    // Estado para almacenar la información del usuario.
    const [user, setUser] = useState<User | null>(null);
    // Estado para indicar si está cargando la información.
    const [loading, setLoading] = useState(true);
    // Estado para manejar los errores.
    const [error, setError] = useState<string | null>(null);

    // Efecto para cargar un usuario específico por su ID.
    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Llama al servicio de usuario para obtener un usuario por su ID.
                const data = await usuarioService.getUsuarioById(id);
                // Actualiza el estado con la información del usuario.
                setUser(data);
            } catch (error) {
                // Captura y maneja los errores.
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                // Establece el estado de carga en falso una vez finalizada la operación.
                setLoading(false);
            }
        };
    
        // Ejecuta la función de carga de usuario.
        fetchUser();
    }, [id]);

    // Devuelve los estados y funciones para ser utilizados en componentes.
    return { user, loading, error };
};

export default useGetUserById;