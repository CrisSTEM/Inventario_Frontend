import { useState } from 'react';
import { createProducto, Producto } from '../../services/productoService';

const useCreateProducto = () => {
  const [loading, setLoading] = useState(false);

  const create = async (producto: Producto) => {
    setLoading(true);
    const newProducto = await createProducto(producto);
    setLoading(false);
    return newProducto;
  };

  return { create, loading };
};

export default useCreateProducto;
