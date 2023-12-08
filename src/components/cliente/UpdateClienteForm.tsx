// UpdateClienteForm.tsx
import React, { useState } from 'react';
import useUpdateCliente from '../../hook/cliente/useUpdateCliente';

const UpdateClienteForm = () => {
    const { updateCliente, error } = useUpdateCliente();
    const [id, setId] = useState<number>(0);
    const [nombre, setNombre] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [vendedor, setVendedor] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const clienteData = { nombre, direccion, telefono, vendedor };
            const updatedCliente = await updateCliente(id, clienteData);
            console.log('Cliente actualizado:', updatedCliente);
        } catch (err) {
            console.error('Error al actualizar el cliente:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID del Cliente:</label>
                <input type="number" value={id} onChange={e => setId(Number(e.target.value))} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
            </div>
            <div>
                <label>Vendedor:</label>
                <input type="text" value={vendedor} onChange={e => setVendedor(e.target.value)} />
            </div>
            <button type="submit">Actualizar Cliente</button>
            {error && <div>Error: {error}</div>}
        </form>
    );
};

export default UpdateClienteForm;
