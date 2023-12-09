// ProductosComponent.tsx
import React from 'react';
import useGetAllProductos from '../hook/producto/useGetAllProductos';

const ProductosComponent: React.FC = () => {
  const { productos, error, loading, refetch } = useGetAllProductos();

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return (
      <div>
        Error al cargar los productos: {error}
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button onClick={refetch}>Recargar Productos</button>
      {productos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Existencia</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.codigo}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>{producto.existencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductosComponent;
