// ProductoDetalle.tsx
import React from 'react';
import useGetProductoById from '../../hook/producto/useGetProductoById';

interface ProductoDetalleProps {
  id: number;
}

const ProductoDetalle: React.FC<ProductoDetalleProps> = ({ id }) => {
  const { producto, error, loading } = useGetProductoById(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>No se encontró el producto</p>;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ul>
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
