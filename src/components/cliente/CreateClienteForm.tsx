// CreateClienteForm.tsx
import React, { useState } from 'react';
import useCreateCliente from '../../hook/cliente/useCreateCliente';

const CreateClienteForm = () => {
    const { createCliente, error } = useCreateCliente();
    const [clienteData, setClienteData] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        vendedor: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClienteData({ ...clienteData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newCliente = await createCliente(clienteData);
            console.log('Cliente creado:', newCliente);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                <input
                    type="text"
                    name="nombre"
                    value={clienteData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="direccion"
                    value={clienteData.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="telefono"
                    value={clienteData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="vendedor"
                    value={clienteData.vendedor}
                    onChange={handleChange}
                    placeholder="Vendedor"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Crear Cliente
            </button>
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </form>
    );
    
};

export default CreateClienteForm;
