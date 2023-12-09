// useGetProductoById.ts
import { useState, useEffect } from 'react';
import productoService, { Producto } from '../../services/productoService';

// Custom hook para obtener un producto por su ID
const useGetProductoById = (id: number) => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Efecto para cargar el producto por ID
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await productoService.getProductoById(id);
        setProducto(data);
      } catch (error) {
        setError('Error al obtener producto');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProducto();
    }
  }, [id]);

  return { producto, error, loading };
};

export default useGetProductoById;