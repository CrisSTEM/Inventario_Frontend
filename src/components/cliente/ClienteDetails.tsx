// ClienteDetails.tsx
import React from 'react';
import useGetClienteById from '../../hook/cliente/useGetClienteById';

interface ClienteDetailsProps {
    id: number;
}

const ClienteDetails: React.FC<ClienteDetailsProps> = ({ id }) => {
    const { cliente, loading, error } = useGetClienteById(id);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!cliente) return <p>No se encontró el cliente.</p>;

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
