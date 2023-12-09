// Importación de React y hooks necesarios
import React, { useState } from 'react';
import useCreateCliente from '../../hook/cliente/useCreateCliente';

// Componente CreateClienteForm para crear clientes
const CreateClienteForm = () => {
    // Hook personalizado para crear un cliente y manejar errores
    const { createCliente, error } = useCreateCliente();

    // Estado para almacenar los datos del cliente
    const [clienteData, setClienteData] = useState({
        nombre: '',
        rif: '',
        direccion: '',
        telefono: '',
        vendedor: ''
    });

    // Función para manejar los cambios en los inputs del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Actualiza clienteData con los nuevos valores
        setClienteData({ ...clienteData, [e.target.name]: e.target.value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        try {
            // Intenta crear un nuevo cliente con los datos ingresados
            const newCliente = await createCliente(clienteData);
            console.log('Cliente creado:', newCliente);
        } catch (err) {
            // Maneja cualquier error que ocurra durante la creación
            console.error(err);
        }
    };

    // Renderiza el formulario
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4 bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit} className="p-6">
                <div className="flex items-center space-x-3 bg-gray-700 text-white py-3 px-6 rounded-t-lg">
                    {/* Campos del formulario para ingresar los datos del cliente */}
                    {/* Campo para nombre */}
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
                        <label htmlFor="rif" className="sr-only">RIF</label>
                        <input
                            id="rif"
                            type="text"
                            name="rif"
                            value={clienteData.rif}
                            onChange={handleChange}
                            placeholder="RIF"
                            className="p-2 border border-gray-300 rounded-md w-full text-black"
                        />
                    </div>
                    {/* Campo para dirección */}
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
                    {/* Campo para teléfono */}
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
                    {/* Campo para vendedor */}
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
                    {/* Botón para enviar el formulario */}
                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Crear
                        </button>
                    </div>
                </div>
                {/* Muestra un mensaje de error si existe alguno */}
                {error && <div className="text-red-500 text-sm p-6">{error}</div>}
            </form>
        </div>
    );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default CreateClienteForm;
