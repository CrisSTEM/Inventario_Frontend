// UpdateVentaForm.tsx
import React, { useState } from 'react';
import useUpdateVenta from '../../hook/venta/useUpdateVenta';

const UpdateVentaForm = () => {
    const { updateVenta, response, error } = useUpdateVenta();
    const [ventaData, setVentaData] = useState({
        fecha: '',
        total: 0,
        id_usuario: 0,
        id_cliente: 0
    });
    const [id, setId] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVentaData({
            ...ventaData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateVenta(id, ventaData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    ID de Venta:
                    <input type="number" value={id} onChange={e => setId(parseInt(e.target.value))} />
                </label>
                <label>
                    Fecha:
                    <input type="date" name="fecha" value={ventaData.fecha} onChange={handleInputChange} />
                </label>
                <label>
                    Total:
                    <input type="number" name="total" value={ventaData.total} onChange={handleInputChange} />
                </label>
                <label>
                    ID de Usuario:
                    <input type="number" name="id_usuario" value={ventaData.id_usuario} onChange={handleInputChange} />
                </label>
                <label>
                    ID de Cliente:
                    <input type="number" name="id_cliente" value={ventaData.id_cliente} onChange={handleInputChange} />
                </label>
                <button type="submit">Actualizar Venta</button>
            </form>
            {response && <div>Mensaje: {response.mensaje}</div>}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default UpdateVentaForm;
