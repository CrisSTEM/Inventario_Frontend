// UpdateVentaForm.tsx
import React, { useEffect, useState } from 'react';
import useUpdateVenta from '../../hook/venta/useUpdateVenta';

// Definiendo la estructura de los datos de una venta
interface VentaData {
    fecha: string;
    total: number;
    id_usuario: number;
    id_cliente: number;
    id?: number; // ID opcional, utilizado para identificar una venta específica
}

// Propiedades esperadas por el componente UpdateVentaForm
interface UpdateVentaFormProps {
    initialVentaData?: VentaData; // Datos iniciales para el formulario (opcional)
    onUpdate?: () => void; // Función callback que se llama después de una actualización exitosa (opcional)
}

// Componente para actualizar los datos de una venta
const UpdateVentaForm: React.FC<UpdateVentaFormProps> = ({ initialVentaData, onUpdate }) => {
    const { updateVenta, response, error } = useUpdateVenta(); // Custom hook para la lógica de actualización
    const [ventaData, setVentaData] = useState<VentaData>({
        fecha: '',
        total: 0,
        id_usuario: 0,
        id_cliente: 0
    });
    const [id, setId] = useState<number>(0); // Estado para almacenar el ID de la venta

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVentaData({
            ...ventaData,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateVenta(id, ventaData); // Llama al hook para actualizar la venta
        if (onUpdate) {
            onUpdate(); // Si se proporcionó un callback, se llama tras la actualización
        }
    };

    // Efecto para inicializar el formulario con los datos proporcionados (si existen)
    useEffect(() => {
        if (initialVentaData) {
            setVentaData({
                fecha: initialVentaData.fecha,
                total: initialVentaData.total,
                id_usuario: initialVentaData.id_usuario,
                id_cliente: initialVentaData.id_cliente
            });
            setId(initialVentaData.id ?? 0); // Establecer el ID si está presente
        }
    }, [initialVentaData]);

    // JSX para renderizar el formulario
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Campos del formulario para ingresar los datos de la venta */}
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
            {/* Mensajes de respuesta o error del servidor */}
            {response && <div>Mensaje: {response.mensaje}</div>}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default UpdateVentaForm;
