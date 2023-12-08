import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/productos';

export interface Producto {
  id?: number;
  codigo: string;
  nombre: string;
  existencia: number;
  precio: number;
}

const productoService = {
  // Mostrar todos los productos
  getAllProductos: async (): Promise<Producto[]> => {
    try {
      const response = await axios.get<Producto[]>(baseUrl);
      return response.data;
    } catch (error) {
      console.error('Error al obtener productos', error);
      throw error;
    }
  },

  // Mostrar un producto específico
  getProductoById: async (id: number): Promise<Producto> => {
    try {
      const response = await axios.get<Producto>(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener producto', error);
      throw error;
    }
  },

  // Crear un nuevo producto
  createProducto: async (producto: Producto): Promise<Producto> => {
    try {
      const response = await axios.post<Producto>(baseUrl, producto);
      return response.data;
    } catch (error) {
      console.error('Error al crear producto', error);
      throw error;
    }
  },
  
  // Actualizar un producto
  updateProducto: async (id: number, producto: Producto): Promise<Producto> => {
    try {
      const response = await axios.put<Producto>(`${baseUrl}/${id}`, producto);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar producto', error);
      throw error;
    }
  },

  // Eliminar un producto
  deleteProducto: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
      console.error('Error al eliminar producto', error);
      throw error;
    }
  }
};

export default productoService;
