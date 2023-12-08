import React, { useState } from 'react';
import useCreateVenta from '../../hook/venta/useCreateVenta';

const CreateVentaForm: React.FC = () => {
    const { createVenta, response, error } = useCreateVenta();
    const [venta, setVenta] = useState({ fecha: '', total: 0, id_usuario: 0, id_cliente: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVenta({ ...venta, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createVenta(venta);
    };

    return (
        <div>
            <h2>Crear Venta</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="fecha"
                    value={venta.fecha}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="total"
                    value={venta.total}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="id_usuario"
                    value={venta.id_usuario}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="id_cliente"
                    value={venta.id_cliente}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Crear Venta</button>
            </form>
            {response && <div>Mensaje: {response.mensaje}</div>}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default CreateVentaForm;
