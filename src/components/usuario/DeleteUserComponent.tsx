// Importación de React y useState para manejo de estado del componente.
import React, { useState } from 'react';

// Importación del hook personalizado useDeleteUser para eliminar usuarios.
import useDeleteUser from '../../hook/usuario/useDeleteUsuario';

const DeleteUserComponent = () => {
    // Destructuración de los valores devueltos por useDeleteUser.
    const { deleteUser, error } = useDeleteUser();

    // Estado para almacenar el ID del usuario a eliminar.
    const [userId, setUserId] = useState<number>(0);

    // Manejador para el botón de eliminar.
    // Llama a deleteUser con el ID proporcionado.
    const handleDelete = async () => {
        await deleteUser(userId);
    };

    // Manejador para cambios en el campo de entrada del ID del usuario.
    // Actualiza el estado userId con el valor ingresado.
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(Number(event.target.value));
    };

    // Renderización del componente: entrada para el ID y botón de eliminar.
    return (
        <div>
            <h3>Eliminar Usuario</h3>
            {/* Campo de entrada para el ID del usuario a eliminar. */}
            <input 
                type="number" 
                placeholder="ID del Usuario" 
                value={userId}
                onChange={handleChange}
            />
            <button onClick={handleDelete}>Eliminar</button>
            {/* Mensaje condicional para mostrar el error en caso de que exista. */}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default DeleteUserComponent;
