import { useState } from 'react';
import productoService from '../../services/productoService';

const useDeleteProducto = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const deleteProducto = async (id: number) => {
    setLoading(true);
    try {
      await productoService.deleteProducto(id);
    } catch (error) {
      setError('Error al eliminar producto');
    } finally {
      setLoading(false);
    }
  };

  return { deleteProducto, error, loading };
};

export default useDeleteProducto;
