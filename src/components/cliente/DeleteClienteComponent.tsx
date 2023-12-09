// DeleteClienteComponent.tsx
import React from 'react';
import useDeleteCliente from '../../hook/cliente/useDeleteCliente';

// Define los props que recibe el componente DeleteClienteComponent
interface DeleteClienteComponentProps {
    clienteId: number;
    onClienteDeleted?: () => void;
}

// Componente funcional DeleteClienteComponent para eliminar un cliente
const DeleteClienteComponent: React.FC<DeleteClienteComponentProps> = ({ clienteId, onClienteDeleted }) => {
    // Llama al hook personalizado useDeleteCliente para realizar la eliminación
    const { deleteCliente, error } = useDeleteCliente();

    // Función que maneja la eliminación del cliente
    const handleDelete = async () => {
        await deleteCliente(clienteId);
        // Si no hay error y se proporciona un callback, se llama al callback
        if (!error && onClienteDeleted) {
            onClienteDeleted();
        }
    };

    // Renderiza el botón de eliminar y, en caso de error, un mensaje de error
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