// useGetAllProductos.ts
import { useState, useEffect,  useCallback } from 'react';
import productoService, { Producto } from '../../services/productoService';

const useGetAllProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProductos = useCallback(async () => {
      try {
        setLoading(true);
        const data = await productoService.getAllProductos();
        setProductos(data);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('Ocurrió un error desconocido');
        }
    } finally {
        setLoading(false);
    }
}, []);

    useEffect(() => {
      fetchProductos();
  }, [fetchProductos]);

  return { productos, error, loading, refetch: fetchProductos };
};

export default useGetAllProductos;
