// UpdateClienteForm.tsx
import React, { useState } from 'react';
import useUpdateCliente from '../../hook/cliente/useUpdateCliente';

// Define el componente funcional UpdateClienteForm.
const UpdateClienteForm = () => {
    // Hooks de estado para manejar las propiedades del cliente.
    const { updateCliente, error } = useUpdateCliente();
    const [id, setId] = useState<number>(0);
    const [nombre, setNombre] = useState<string>('');
    const [rif, setRif] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [vendedor, setVendedor] = useState<string>('');

    // Manejador del evento submit del formulario.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario.
        try {
            // Prepara los datos del cliente para la actualización.
            const clienteData = { nombre, direccion, telefono, vendedor };
            // Llama al hook useUpdateCliente para actualizar la información.
            const updatedCliente = await updateCliente(id, clienteData);
            console.log('Cliente actualizado:', updatedCliente);
        } catch (err) {
            console.error('Error al actualizar el cliente:', err); // Manejo de errores.
        }
    };

    // Renderiza el formulario para actualizar datos del cliente.
    return (
        <form onSubmit={handleSubmit}>
            {/* Cada grupo de label e input maneja una propiedad del cliente. */}
            <div>
                <label>ID del Cliente:</label>
                <input type="number" value={id} onChange={e => setId(Number(e.target.value))} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div>
                <label>RIF:</label>
                <input type="text" value={rif} onChange={e => setRif(e.target.value)} />
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
            {/* Muestra un error si hay alguno durante la actualización. */}
            {error && <div>Error: {error}</div>}
        </form>
    );
};

// Exporta el componente para su uso en otros archivos.
export default UpdateClienteForm;
