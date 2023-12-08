// ProductosComponent.tsx
import React from 'react';
import useGetAllProductos from '../../hook/producto/useGetAllProductos';
import { Producto } from '../../services/productoService';

const ProductosComponent: React.FC = () => {
  const { productos, error, loading } = useGetAllProductos();

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length > 0 ? (
        <ul>
          {productos.map((producto: Producto) => (
            <li key={producto.id}>
              {producto.nombre} - {producto.codigo} - Existencia: {producto.existencia} - Precio: ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductosComponent;
