// UsersList.tsx
import React from 'react';
import useGetAllUsers from '../../hook/usuario/useGetAllUsuarios';

const UsersList: React.FC = () => {
    const { users, loading, error } = useGetAllUsers();

    if (loading) {
        return <div>Cargando usuarios...</div>;
    }

    if (error) {
        return <div>Error al cargar usuarios: {error}</div>;
    }

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.nombre} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
