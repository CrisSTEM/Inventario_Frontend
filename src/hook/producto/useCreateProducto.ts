// useCreateProducto.ts
import { useState } from 'react';
import productoService, { Producto } from '../../services/productoService';

// Custom hook para crear un producto
const useCreateProducto = () => {
  // Estado para manejar el error
  const [error, setError] = useState('');
  // Estado para indicar si la petición está en proceso
  const [loading, setLoading] = useState(false);

  // Función para crear un producto
  const createProducto = async (producto: Producto) => {
    setLoading(true); // Iniciar carga
    try {
      await productoService.createProducto(producto); // Intentar crear el producto
    } catch (error) {
      setError('Error al crear producto'); // Manejar error
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  // Devolver los estados y la función de creación
  return { createProducto, error, loading };
};

export default useCreateProducto;