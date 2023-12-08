// UpdateUserComponent.tsx
import React, { useState } from 'react';
import useUpdateUser from '../../hook/usuario/useUpdateUsuario';

const UpdateUserComponent = () => {
    const { updateUser, error, isSuccess } = useUpdateUser();
    const [userId, setUserId] = useState<number>(0);
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userId > 0) {
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
