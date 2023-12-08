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
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4 bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit} className="p-6">
                <div className="flex items-center space-x-3 bg-gray-700 text-white py-3 px-6 rounded-t-lg">
                    <div className="flex-1 min-w-0">
                        <label htmlFor="nombre" className="sr-only">Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={clienteData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="p-2 border border-gray-300 rounded-md w-full text-black"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="direccion" className="sr-only">Dirección</label>
                        <input
                            id="direccion"
                            type="text"
                            name="direccion"
                            value={clienteData.direccion}
                            onChange={handleChange}
                            placeholder="Dirección"
                            className="p-2 border border-gray-300 rounded-md w-full text-black"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="telefono" className="sr-only">Teléfono</label>
                        <input
                            id="telefono"
                            type="text"
                            name="telefono"
                            value={clienteData.telefono}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            className="p-2 border border-gray-300 rounded-md w-full text-black"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="vendedor" className="sr-only">Vendedor</label>
                        <input
                            id="vendedor"
                            type="text"
                            name="vendedor"
                            value={clienteData.vendedor}
                            onChange={handleChange}
                            placeholder="Vendedor"
                            className="p-2 border border-gray-300 rounded-md w-full text-black"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Crear
                        </button>
                    </div>
                </div>
                {error && <div className="text-red-500 text-sm p-6">{error}</div>}
            </form>
        </div>
    );
};
export default CreateClienteForm;
