// CreateVentaForm.tsx
import React, { useState } from 'react';
import useCreateVenta from '../../hook/venta/useCreateVenta';

// Este es un componente de formulario para crear una venta.
const CreateVentaForm: React.FC = () => {
    // useCreateVenta es un hook personalizado para manejar la creación de ventas.
    const { createVenta, response, error } = useCreateVenta();

    // Estado para mantener los datos de la venta.
    const [venta, setVenta] = useState({ fecha: '', total: 0, id_usuario: 0, id_cliente: 0 });

    // Función para manejar el cambio en los campos del formulario.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Actualiza el estado de la venta con los nuevos valores de los campos.
        setVenta({ ...venta, [e.target.name]: e.target.value });
    };

    // Función para manejar el envío del formulario.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario.
        await createVenta(venta); // Llama al hook personalizado para crear la venta.
    };

    // Renderiza el formulario de venta.
    return (
        <div>
            <h2>Crear Venta</h2>
            <form onSubmit={handleSubmit}>
                {/* Campos de entrada para los datos de la venta */}
                <input type="date" name="fecha" value={venta.fecha} onChange={handleChange} required />
                <input type="number" name="total" value={venta.total} onChange={handleChange} required />
                <input type="number" name="id_usuario" value={venta.id_usuario} onChange={handleChange} required />
                <input type="number" name="id_cliente" value={venta.id_cliente} onChange={handleChange} required />
                <button type="submit">Crear Venta</button>
            </form>
            {/* Muestra la respuesta o error del hook useCreateVenta */}
            {response && <div>Mensaje: {response.mensaje}</div>}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default CreateVentaForm;