import { useState } from 'react';
import { deleteProducto } from '../../services/productoService';

const useDeleteProducto = () => {
  const [loading, setLoading] = useState(false);

  const deleteProd = async (id: number) => {
    setLoading(true);
    await deleteProducto(id);
    setLoading(false);
  };

  return { deleteProd, loading };
};

export default useDeleteProducto;
