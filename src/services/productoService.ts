// Importación de la biblioteca Axios para realizar solicitudes HTTP
import axios from 'axios';

// URL base para las solicitudes HTTP a la API de productos
const baseUrl = 'http://127.0.0.1:8000/api/productos';

// Definición de la interfaz Producto para tipar los datos manejados
export interface Producto {
  id?: number; // Identificador único del producto (opcional para creación)
  codigo: string; // Código del producto
  nombre: string; // Nombre del producto
  existencia: number; // Cantidad en existencia
  precio: number; // Precio del producto
}

// Objeto que contiene las funciones para interactuar con la API
const productoService = {
  // Función para obtener todos los productos
  getAllProductos: async (): Promise<Producto[]> => {
    try {
      const response = await axios.get<Producto[]>(baseUrl);
      return response.data;
    } catch (error) {
      console.error('Error al obtener productos', error);
      throw error;
    }
  },

  // Función para obtener un producto específico por su ID
  getProductoById: async (id: number): Promise<Producto> => {
    try {
      const response = await axios.get<Producto>(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener producto', error);
      throw error;
    }
  },

  // Función para crear un nuevo producto
  createProducto: async (producto: Producto): Promise<Producto> => {
    try {
      const response = await axios.post<Producto>(baseUrl, producto);
      return response.data;
    } catch (error) {
      console.error('Error al crear producto', error);
      throw error;
    }
  },
  
  // Función para actualizar un producto existente
  updateProducto: async (id: number, producto: Producto): Promise<Producto> => {
    try {
      const response = await axios.put<Producto>(`${baseUrl}/${id}`, producto);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar producto', error);
      throw error;
    }
  },

  // Función para eliminar un producto por su ID
  deleteProducto: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
      console.error('Error al eliminar producto', error);
      throw error;
    }
  }
};

// Exportación del servicio para su uso en otras partes de la aplicación
export default productoService;
