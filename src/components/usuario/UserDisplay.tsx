import React from 'react';
import useGetUserById from '../../hook/usuario/useGetUsuarioById';

interface UserDisplayProps {
    userId: number;
}

const UserDisplay: React.FC<UserDisplayProps> = ({ userId }) => {
    const { user, loading, error } = useGetUserById(userId);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>No se encontró el usuario.</div>;
    }

    return (
        <div>
            <h2>Información del Usuario</h2>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDisplay;
