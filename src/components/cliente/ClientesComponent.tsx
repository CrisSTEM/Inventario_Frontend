// ClientesComponent.tsx
import React from 'react';
import useGetAllClientes from '../../hook/cliente/useGetAllClientes';

const ClientesComponent: React.FC = () => {
    const { clientes, loading, error } = useGetAllClientes();

    if (loading) {
        return <div>Cargando clientes...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        <h3>{cliente.nombre}</h3>
                        <p>Dirección: {cliente.direccion}</p>
                        <p>Teléfono: {cliente.telefono}</p>
                        <p>Vendedor: {cliente.vendedor}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientesComponent;
