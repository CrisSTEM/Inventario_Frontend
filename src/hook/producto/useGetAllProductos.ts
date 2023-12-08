import { useState, useEffect } from 'react';
import productoService, { Producto } from '../../services/productoService';

const useGetAllProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await productoService.getAllProductos();
        setProductos(data);
      } catch (error) {
        setError('Error al obtener productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, error, loading };
};

export default useGetAllProductos;
