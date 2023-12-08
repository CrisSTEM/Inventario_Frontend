import axios from 'axios';

const baseURL = 'http://http://127.0.0.1:8000/api/ventas';

interface Venta {
    fecha: string;
    total: number;
    id_usuario: number;
    id_cliente: number;
}

interface VentaResponse {
    mensaje: string;
    venta?: Venta;
}

const ventaService = {
    getAllVentas: async (): Promise<Venta[]> => {
        try {
            const response = await axios.get<Venta[]>(baseURL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las ventas', error);
            throw error;
        }
    },

    getVentaById: async (id: number): Promise<Venta> => {
        try {
            const response = await axios.get<Venta>(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener la venta con ID: ${id}`, error);
            throw error;
        }
    },

    createVenta: async (ventaData: Venta): Promise<VentaResponse> => {
        try {
            const response = await axios.post<VentaResponse>(baseURL, ventaData);
            return response.data;
        } catch (error) {
            console.error('Error al crear una venta', error);
            throw error;
        }
    },

    updateVenta: async (id: number, ventaData: Partial<Venta>): Promise<VentaResponse> => {
        try {
            const response = await axios.put<VentaResponse>(`${baseURL}/${id}`, ventaData);
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar la venta con ID: ${id}`, error);
            throw error;
        }
    },

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

export default ventaService;
