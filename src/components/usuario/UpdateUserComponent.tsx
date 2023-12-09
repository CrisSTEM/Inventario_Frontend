// Importamos React y el hook de estado (useState) para gestionar el estado local del componente.
import React, { useState } from 'react';
// Importamos el hook personalizado useUpdateUser para la actualización del usuario.
import useUpdateUser from '../../hook/usuario/useUpdateUsuario';

// Definimos el componente funcional UpdateUserComponent.
const UpdateUserComponent = () => {
    // Utilizamos el hook useUpdateUser para obtener funciones y estados relacionados con la actualización del usuario.
    const { updateUser, error, isSuccess } = useUpdateUser();
    // Estado local para almacenar el ID del usuario a actualizar.
    const [userId, setUserId] = useState<number>(0);
    // Estado local para almacenar los datos del usuario a actualizar.
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    // Manejador para cambios en los inputs del formulario.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Actualiza el estado de userData con los nuevos valores de los inputs.
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Manejador para el envío del formulario.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario.
        if (userId > 0) {
            // Si el userId es válido, llama a la función de actualización.
            await updateUser(userId, userData);
        }
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    placeholder="ID del usuario"
                />
                <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                />
                <button type="submit">Actualizar Usuario</button>
            </form>
            {error && <p>Error: {error.message}</p>}
            {isSuccess && <p>Usuario actualizado con éxito!</p>}
        </div>
    );
};

export default UpdateUserComponent;
