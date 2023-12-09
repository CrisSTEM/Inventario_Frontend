// ProductosComponent.tsx
import React, { useContext } from 'react';
import useGetAllProductos from '../hook/producto/useGetAllProductos';
import { CartContext } from '../context/CartContext';

interface Producto {
  id?: number;
  codigo: string;
  nombre: string;
  existencia: number;
  precio: number;
}


const ProductosComponent: React.FC = () => {
  const { productos, error, loading, refetch } = useGetAllProductos();
  const { addToCart } = useContext(CartContext);

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
              <th>Existencia</th>
              <th>Precio</th>
              <th>Agregar al Carrito</th>
            </tr>
          </thead>
          <tbody>
          {productos.map((producto: Producto) => (
  <tr key={producto.id ? producto.id.toString() : 'temp-key'}>
                <td>{producto.id}</td>
                <td>{producto.codigo}</td>
                <td>{producto.nombre}</td>
                <td>{producto.existencia}</td>
                <td>${producto.precio}</td>
                <td>
                  <button onClick={() => addToCart(producto)}>
                    Añadir al Carrito
                  </button>
                </td>
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
