// DeleteClienteComponent.tsx
import React, { useState } from 'react';
import useDeleteCliente from '../../hook/cliente/useDeleteCliente';

interface DeleteClienteComponentProps {
    onClienteDeleted?: () => void;
}

const DeleteClienteComponent: React.FC<DeleteClienteComponentProps> = ({ onClienteDeleted }) => {
    const [clienteId, setClienteId] = useState<number>(0);
    const { deleteCliente, error } = useDeleteCliente();

    const handleDelete = async () => {
        await deleteCliente(clienteId);
        if (!error && onClienteDeleted) {
            onClienteDeleted();
        }
    };

    return (
        <div>
            <input
                type="number"
                value={clienteId}
                onChange={(e) => setClienteId(parseInt(e.target.value))}
                placeholder="ID del Cliente"
            />
            <button onClick={handleDelete}>Eliminar Cliente</button>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default DeleteClienteComponent;
