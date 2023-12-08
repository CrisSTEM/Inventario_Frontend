import { useState, useEffect } from 'react';
import { getProducto, Producto } from '../../services/productoService';

const useProducto = (id: number) => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      const data = await getProducto(id);
      setProducto(data);
      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  return { producto, loading };
};

export default useProducto;
