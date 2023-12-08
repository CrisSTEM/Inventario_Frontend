import { useState } from 'react';
import { updateProducto, Producto } from '../../services/productoService';

const useUpdateProducto = () => {
  const [loading, setLoading] = useState(false);

  const update = async (id: number, producto: Producto) => {
    setLoading(true);
    const updatedProducto = await updateProducto(id, producto);
    setLoading(false);
    return updatedProducto;
  };

  return { update, loading };
};

export default useUpdateProducto;
