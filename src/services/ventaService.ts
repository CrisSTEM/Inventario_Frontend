// ventaService.ts
import axios from 'axios';

// URL base para las solicitudes a la API de ventas
const baseURL = 'http://127.0.0.1:8000/api/ventas';

// Definición de la interfaz Venta, representa la estructura de una venta
export interface Venta {
    id: number;
    fecha: string;
    total: number;
    id_usuario: number;
    id_cliente: number;
}

// Definición de la interfaz VentaResponse, representa la respuesta esperada de la API para las ventas
export interface VentaResponse {
    mensaje: string;
    venta?: Venta;
}

// Objeto ventaService contiene métodos para interactuar con la API de ventas
const ventaService = {
    // Método para obtener todas las ventas. Devuelve una promesa con un array de ventas
    getAllVentas: async (): Promise<Venta[]> => {
        try {
            const response = await axios.get<Venta[]>(baseURL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las ventas', error);
            throw error;
        }
    },

    // Método para obtener una venta por su ID. Devuelve una promesa con la venta solicitada
    getVentaById: async (id: number): Promise<Venta> => {
        try {
            const response = await axios.get<Venta>(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener la venta con ID: ${id}`, error);
            throw error;
        }
    },

    // Método para crear una nueva venta. Devuelve una promesa con la respuesta de la creación
    createVenta: async (ventaData: Venta): Promise<VentaResponse> => {
        try {
            const response = await axios.post<VentaResponse>(baseURL, ventaData);
            return response.data;
        } catch (error) {
            console.error('Error al crear una venta', error);
            throw error;
        }
    },

    // Método para actualizar una venta existente. Devuelve una promesa con la respuesta de la actualización
    updateVenta: async (id: number, ventaData: Partial<Venta>): Promise<VentaResponse> => {
        try {
            const response = await axios.put<VentaResponse>(`${baseURL}/${id}`, ventaData);
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar la venta con ID: ${id}`, error);
            throw error;
        }
    },

    // Método para eliminar una venta. Devuelve una promesa con la respuesta de la eliminación
    deleteVenta: async (id: number): Promise<VentaResponse> => {
        try {
            const response = await axios.delete<VentaResponse>(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al eliminar la venta con ID: ${id}`, error);
            throw error;
        }
    }
};

// Exportación del servicio para su uso en otras partes de la aplicación
export default ventaService;
