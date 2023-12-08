// DeleteClienteComponent.tsx
import React from 'react';
import useDeleteCliente from '../../hook/cliente/useDeleteCliente';

interface DeleteClienteComponentProps {
    clienteId: number;
    onClienteDeleted?: () => void;
}

const DeleteClienteComponent: React.FC<DeleteClienteComponentProps> = ({ clienteId, onClienteDeleted }) => {
    const { deleteCliente, error } = useDeleteCliente();

    const handleDelete = async () => {
        await deleteCliente(clienteId);
        if (!error && onClienteDeleted) {
            onClienteDeleted();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button 
                onClick={handleDelete} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Eliminar Cliente
            </button>
            {error && (
                <p className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    Error: {error}
                </p>
            )}
        </div>
    );
    
};

export default DeleteClienteComponent;
