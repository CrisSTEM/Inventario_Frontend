// CreateProductoComponent.tsx
import React, { useState } from 'react';
import useCreateProducto from '../../hook/producto/useCreateProducto';
import { Producto } from '../../services/productoService';

const CreateProductoComponent: React.FC = () => {
  const { createProducto, error, loading } = useCreateProducto();
  const [producto, setProducto] = useState<Producto>({ codigo: '', nombre: '', existencia: 0, precio: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProducto(producto);
      alert('Producto creado con éxito');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>Crear Producto</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateProductoComponent;
