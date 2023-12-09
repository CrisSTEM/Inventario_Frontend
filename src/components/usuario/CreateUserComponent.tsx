// Importación de React y el hook useState para manejar el estado del componente.
import React, { useState } from 'react';

// Importación del hook personalizado useCreateUser para la creación de usuarios.
import useCreateUser from '../../hook/usuario/useCreateUsuario';

const CreateUserComponent = () => {
    // Destructuración de los valores devueltos por useCreateUser.
    const { createUser, error, isSuccess } = useCreateUser();

    // Estado para manejar la información del usuario (nombre, email, contraseña).
    const [userData, setUserData] = useState({ nombre: '', email: '', password: '' });

    // Manejador para los cambios en los campos del formulario.
    // Actualiza el estado userData con los valores ingresados.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Manejador para el envío del formulario.
    // Previene el comportamiento por defecto del formulario y llama a createUser.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser(userData);
    };

    // Renderización del componente: formulario con inputs y mensajes de éxito/error.
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Campos de entrada para nombre, email y contraseña. */}
                {/* Cada input maneja su propio cambio para actualizar el estado. */}
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
                    placeholder="Password"
                />
                <button type="submit">Crear Usuario</button>
            </form>
            {/* Mensajes condicionales para mostrar el éxito o error en la creación del usuario. */}
            {isSuccess && <p>Usuario creado con éxito!</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default CreateUserComponent;