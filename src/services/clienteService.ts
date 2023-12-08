// clienteService.ts
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/clientes';

export interface Cliente {
    id?: number;
    nombre: string;
    direccion: string;
    telefono: string;
    vendedor: string;
}

const clienteService = {
    // Obtener todos los clientes
    getAllClientes: async (): Promise<Cliente[]> => {
        try {
            const response = await axios.get<Cliente[]>(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener clientes', error);
            throw error;
        }
    },

    // Obtener un cliente específico
    getClienteById: async (id: number): Promise<Cliente> => {
        try {
            const response = await axios.get<Cliente>(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener cliente', error);
            throw error;
        }
    },

    // Crear un nuevo cliente
    createCliente: async (clienteData: Cliente): Promise<Cliente> => {
        try {
            const response = await axios.post<Cliente>(BASE_URL, clienteData);
            return response.data;
        } catch (error) {
            console.error('Error al crear cliente', error);
            throw error;
        }
    },

    // Actualizar un cliente
    updateCliente: async (id: number, clienteData: Partial<Cliente>): Promise<Cliente> => {
        try {
            const response = await axios.put<Cliente>(`${BASE_URL}/${id}`, clienteData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar cliente', error);
            throw error;
        }
    },

    // Eliminar un cliente
    deleteCliente: async (id: number): Promise<void> => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            console.error('Error al eliminar cliente', error);
            throw error;
        }
    }
};

export default clienteService;