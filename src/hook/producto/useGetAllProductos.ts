// useGetAllProductos.ts
import { useState, useEffect, useCallback } from 'react';
import productoService, { Producto } from '../../services/productoService';

// Custom hook para obtener todos los productos
const useGetAllProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener los productos
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

  // useEffect para llamar a fetchProductos cuando el componente se monta
  useEffect(() => {
      fetchProductos();
  }, [fetchProductos]);

  return { productos, error, loading, refetch: fetchProductos };
};

export default useGetAllProductos;