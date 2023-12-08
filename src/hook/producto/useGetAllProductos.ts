import { useState, useEffect } from 'react';
import { getAllProductos, Producto } from '../../services/productoService';

const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getAllProductos();
      setProductos(data);
      setLoading(false);
    };

    fetchProductos();
  }, []);

  return { productos, loading };
};

export default useProductos;
