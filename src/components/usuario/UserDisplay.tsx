// Importa React para poder usar JSX y componentes de React
import React from 'react';
// Importa el hook personalizado useGetUserById para obtener datos del usuario
import useGetUserById from '../../hook/usuario/useGetUsuarioById';

// Define la interfaz de las props que acepta el componente UserDisplay
interface UserDisplayProps {
    userId: number; // Prop 'userId' es un número que representa el ID del usuario
}

// Componente funcional UserDisplay que acepta props del tipo UserDisplayProps
const UserDisplay: React.FC<UserDisplayProps> = ({ userId }) => {
    // Utiliza el hook personalizado useGetUserById para obtener datos del usuario, estado de carga y error
    const { user, loading, error } = useGetUserById(userId);

    // Muestra un mensaje de carga si la solicitud está en progreso
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Muestra un mensaje de error si hay un error en la solicitud
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Muestra un mensaje si no se encuentra el usuario
    if (!user) {
        return <div>No se encontró el usuario.</div>;
    }

    // Renderiza la información del usuario si está disponible
    return (
        <div>
            <h2>Información del Usuario</h2>
            <p>Nombre: {user.nombre}</p> {/* Muestra el nombre del usuario */}
            <p>Email: {user.email}</p> {/* Muestra el email del usuario */}
        </div>
    );
};

// Exporta el componente para poder ser usado en otras partes de la aplicación
export default UserDisplay;
