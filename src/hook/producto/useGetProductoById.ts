import { useState, useEffect } from 'react';
import productoService, { Producto } from '../../services/productoService';

const useGetProductoById = (id: number) => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

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
