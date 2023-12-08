// CreateUserComponent.tsx
import React, { useState } from 'react';
import useCreateUser from '../../hook/usuario/useCreateUsuario';

const CreateUserComponent = () => {
    const { createUser, error, isSuccess } = useCreateUser();
    const [userData, setUserData] = useState({ nombre: '', email: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser(userData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
            {isSuccess && <p>Usuario creado con éxito!</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default CreateUserComponent;
