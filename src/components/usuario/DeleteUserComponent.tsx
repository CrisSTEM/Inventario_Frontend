// DeleteUserComponent.tsx
import React, { useState } from 'react';
import useDeleteUser from '../../hook/usuario/useDeleteUsuario';

const DeleteUserComponent = () => {
    const { deleteUser, error } = useDeleteUser();
    const [userId, setUserId] = useState<number>(0);

    const handleDelete = async () => {
        await deleteUser(userId);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(Number(event.target.value));
    };

    return (
        <div>
            <h3>Eliminar Usuario</h3>
            <input 
                type="number" 
                placeholder="ID del Usuario" 
                value={userId}
                onChange={handleChange}
            />
            <button onClick={handleDelete}>Eliminar</button>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default DeleteUserComponent;
