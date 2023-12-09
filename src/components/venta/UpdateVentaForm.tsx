// UpdateVentaForm.tsx
import React, { useEffect, useState } from 'react';
import useUpdateVenta from '../../hook/venta/useUpdateVenta';

interface VentaData {
    fecha: string;
    total: number;
    id_usuario: number;
    id_cliente: number;
    id?: number; // Suponiendo que también incluyes un ID en los datos de la venta
}

interface UpdateVentaFormProps {
    initialVentaData?: VentaData;
    onUpdate?: () => void;
}


// Añadiendo propiedades para datos iniciales y un callback para cuando se actualice
const UpdateVentaForm: React.FC<UpdateVentaFormProps> = ({ initialVentaData, onUpdate }) => {
    const { updateVenta, response, error } = useUpdateVenta();
    const [ventaData, setVentaData] = useState({
        fecha: '',
        total: 0,
        id_usuario: 0,
        id_cliente: 0
    });
    const [id, setId] = useState<number>(0);

    // Manejar el cambio en los inputs del formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVentaData({
            ...ventaData,
            [e.target.name]: e.target.value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateVenta(id, ventaData);
        if (onUpdate) {
            onUpdate(); // Llamada al callback después de actualizar
        }
    };

    // Efecto para inicializar el formulario con los datos pasados como props
    useEffect(() => {
        if (initialVentaData) {
            setVentaData({
                fecha: initialVentaData.fecha,
                total: initialVentaData.total,
                id_usuario: initialVentaData.id_usuario,
                id_cliente: initialVentaData.id_cliente
            });
            setId(initialVentaData.id ?? 0); // Asegúrate de que `id` sea parte de los datos de la venta
        }
    }, [initialVentaData]);

    // Renderizado del formulario
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
