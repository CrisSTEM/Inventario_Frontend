// UpdateProductoForm.tsx
import React, { useState } from 'react';
import useUpdateProducto from '../../hook/producto/useUpdateProducto';
import { Producto } from '../../services/productoService';

const UpdateProductoForm: React.FC = () => {
  const { updateProducto, error, loading } = useUpdateProducto();
  const [producto, setProducto] = useState<Producto>({ codigo: '', nombre: '', existencia: 0, precio: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (producto.id) {
      await updateProducto(producto.id, producto);
    } else {
      alert('El producto necesita un ID para ser actualizado');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={loading}>Actualizar Producto</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UpdateProductoForm;
