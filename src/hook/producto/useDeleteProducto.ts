// useDeleteProducto.ts
import { useState } from 'react';
import productoService from '../../services/productoService';

// Custom hook para eliminar un producto
const useDeleteProducto = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para eliminar un producto
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