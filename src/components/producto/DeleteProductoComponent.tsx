// DeleteProductoComponent.tsx
import { useState } from 'react';
import useDeleteProducto from '../../hook/producto/useDeleteProducto';

const DeleteProductoComponent = () => {
  const [productId, setProductId] = useState<number>(0);
  const { deleteProducto, error, loading } = useDeleteProducto();

  const handleDelete = async () => {
    if (productId > 0) {
      await deleteProducto(productId);
    }
  };

  return (
    <div>
      <h2>Eliminar Producto</h2>
      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(parseInt(e.target.value))}
        placeholder="Ingrese ID del producto"
      />
      <button onClick={handleDelete} disabled={loading}>
        Eliminar Producto
      </button>
      {loading && <p>Eliminando...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DeleteProductoComponent;
