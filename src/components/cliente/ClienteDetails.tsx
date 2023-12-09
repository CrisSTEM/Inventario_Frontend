// ClienteDetails.tsx
import React from 'react';
import useGetClienteById from '../../hook/cliente/useGetClienteById';

// Define los props que recibe el componente ClienteDetails
interface ClienteDetailsProps {
    id: number;
}

// Componente funcional ClienteDetails para mostrar detalles de un cliente
const ClienteDetails: React.FC<ClienteDetailsProps> = ({ id }) => {
    // Llama al hook personalizado useGetClienteById para obtener los detalles del cliente
    const { cliente, loading, error } = useGetClienteById(id);

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (loading) return <p>Cargando...</p>;
    // Muestra un mensaje de error en caso de que exista uno
    if (error) return <p>Error: {error}</p>;
    // Muestra un mensaje si no se encuentra el cliente
    if (!cliente) return <p>No se encontró el cliente.</p>;

    // Renderiza los detalles del cliente
    return (
        <div>
            <h2>Detalles del Cliente</h2>
            <p><strong>ID:</strong> {cliente.id}</p>
            <p><strong>Nombre:</strong> {cliente.nombre}</p>
            <p><strong>Dirección:</strong> {cliente.direccion}</p>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
            <p><strong>Vendedor:</strong> {cliente.vendedor}</p>
        </div>
    );
};

export default ClienteDetails;