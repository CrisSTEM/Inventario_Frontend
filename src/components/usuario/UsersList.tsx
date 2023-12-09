// Importamos React para usar componentes y el hook useGetAllUsers para obtener todos los usuarios.
import React from 'react';
import useGetAllUsers from '../../hook/usuario/useGetAllUsuarios';

// Definimos el componente funcional UsersList.
const UsersList: React.FC = () => {
    // Usamos el hook useGetAllUsers para obtener el estado y las funciones para manejar la lista de usuarios.
    const { users, loading, error } = useGetAllUsers();

    // Renderiza un mensaje de carga si está cargando los datos.
    if (loading) {
        return <div>Cargando usuarios...</div>;
    }

    // Renderiza un mensaje de error si hay un error al cargar los usuarios.
    if (error) {
        return <div>Error al cargar usuarios: {error}</div>;
    }

    // Renderiza la lista de usuarios si se cargaron correctamente.
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map((user, index) => (
                    // Muestra cada usuario en una lista.
                    <li key={index}>{user.nombre} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;