// useCreateProducto.ts
import { useState } from 'react';
import productoService, { Producto } from '../../services/productoService';

const useCreateProducto = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const createProducto = async (producto: Producto) => {
    setLoading(true);
    try {
      await productoService.createProducto(producto);
    } catch (error) {
      setError('Error al crear producto');
    } finally {
      setLoading(false);
    }
  };

  return { createProducto, error, loading };
};

export default useCreateProducto;
