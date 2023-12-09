// ProductoDetalle.tsx
import React from 'react';
import useGetProductoById from '../../hook/producto/useGetProductoById';

// Este componente muestra los detalles de un producto específico.
interface ProductoDetalleProps {
  id: number; // Propiedad 'id' para identificar el producto.
}

const ProductoDetalle: React.FC<ProductoDetalleProps> = ({ id }) => {
  // useGetProductoById es un hook personalizado para obtener un producto por su ID.
  const { producto, error, loading } = useGetProductoById(id);

  // Renderiza según el estado de la carga y la existencia del producto.
  if (loading) return <p>Cargando...</p>; // Muestra un mensaje de carga.
  if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error.
  if (!producto) return <p>No se encontró el producto</p>; // Mensaje si no se encuentra el producto.

  // Renderiza los detalles del producto.
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ul>
        {/* Lista con los detalles del producto */}
        <li>ID: {producto.id}</li>
        <li>Código: {producto.codigo}</li>
        <li>Nombre: {producto.nombre}</li>
        <li>Existencia: {producto.existencia}</li>
        <li>Precio: {producto.precio}</li>
      </ul>
    </div>
  );
};

export default ProductoDetalle;