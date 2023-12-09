// useUpdateProducto.ts
import { useState } from 'react';
import productoService, { Producto } from '../../services/productoService';

// Custom hook para actualizar un producto
const useUpdateProducto = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para actualizar un producto
  const updateProducto = async (id: number, producto: Producto) => {
    setLoading(true);
    try {
      await productoService.updateProducto(id, producto);
    } catch (error) {
      setError('Error al actualizar producto');
    } finally {
      setLoading(false);
    }
  };

  return { updateProducto, error, loading };
};

export default useUpdateProducto;