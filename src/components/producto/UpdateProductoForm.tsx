// UpdateProductoForm.tsx

// Importaciones de React, hook personalizado para actualizar productos y definición de Producto
import React, { useState } from 'react';
import useUpdateProducto from '../../hook/producto/useUpdateProducto';
import { Producto } from '../../services/productoService';

// Componente funcional para actualizar un producto
const UpdateProductoForm: React.FC = () => {
  // Utiliza el hook personalizado para actualizar productos
  const { updateProducto, error, loading } = useUpdateProducto();
  // Estado para manejar los datos del producto
  const [producto, setProducto] = useState<Producto>({ codigo: '', nombre: '', existencia: 0, precio: 0 });

  // Manejador para cambios en los inputs del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value }); // Actualiza el estado del producto
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página
    if (producto.id) {
      await updateProducto(producto.id, producto); // Llama a la función de actualizar si hay un ID
    } else {
      alert('El producto necesita un ID para ser actualizado'); // Alerta si falta el ID
    }
  };

  // Renderizado del formulario
  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs para cada campo del producto */}
      <div>
        <label>ID:</label>
        <input type="number" name="id" value={producto.id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Código:</label>
        <input type="text" name="codigo" value={producto.codigo} onChange={handleInputChange} />
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={producto.nombre} onChange={handleInputChange} />
      </div>
      <div>
        <label>Existencia:</label>
        <input type="number" name="existencia" value={producto.existencia} onChange={handleInputChange} />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" name="precio" value={producto.precio} onChange={handleInputChange} />
      </div>
      <button type="submit" disabled={loading}>Actualizar Producto</button> // Botón de envío
      {error && <p>{error}</p>} // Muestra un mensaje de error si lo hay
    </form>
  );
};

export default UpdateProductoForm;