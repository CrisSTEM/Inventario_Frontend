// CreateProductoComponent.tsx
import React, { useState } from 'react';
import useCreateProducto from '../../hook/producto/useCreateProducto';
import { Producto } from '../../services/productoService';

// Este componente permite crear un nuevo producto.
const CreateProductoComponent: React.FC = () => {
  // useCreateProducto es un hook personalizado para la creación de productos.
  const { createProducto, error, loading } = useCreateProducto();

  // Estado para manejar los datos del producto a crear.
  const [producto, setProducto] = useState<Producto>({ codigo: '', nombre: '', existencia: 0, precio: 0 });

  // Manejador para cambios en los campos del formulario.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Actualiza el estado del producto con los nuevos valores ingresados.
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  // Manejador para el envío del formulario.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página.
    try {
      // Intenta crear el producto con el hook personalizado.
      await createProducto(producto);
      alert('Producto creado con éxito'); // Alerta de éxito.
    } catch (err) {
      console.error(err); // Captura y muestra errores en consola.
    }
  };

  // Renderiza el formulario para crear un producto.
  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario para ingresar datos del producto */}
        <div>
          <label>Código:</label>
          <input type="text" name="codigo" value={producto.codigo} onChange={handleChange} />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Existencia:</label>
          <input type="number" name="existencia" value={producto.existencia} onChange={handleChange} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="precio" value={producto.precio} onChange={handleChange} />
        </div>
        {/* Botón para enviar el formulario, deshabilitado durante la carga */}
        <button type="submit" disabled={loading}>Crear Producto</button>
      </form>
      {/* Muestra errores si los hay */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateProductoComponent;