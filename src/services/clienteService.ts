// Importamos axios para realizar peticiones HTTP
import axios from 'axios';

// URL base para las peticiones a la API de clientes
const BASE_URL = 'http://127.0.0.1:8000/api/clientes';

// Definimos la interfaz Cliente para tipar los datos de los clientes
export interface Cliente {
    id?: number;          // ID del cliente, opcional para casos de creación
    rif: string;
    nombre: string;       // Nombre del cliente
    direccion: string;    // Dirección del cliente
    telefono: string;     // Teléfono del cliente
    vendedor: string;     // Vendedor asociado al cliente
}

// Objeto con los métodos para interactuar con la API de clientes
const clienteService = {
    // Método para obtener todos los clientes
    getAllClientes: async (): Promise<Cliente[]> => {
        try {
            const response = await axios.get<Cliente[]>(BASE_URL);
            return response.data;  // Devuelve la lista de clientes
        } catch (error) {
            console.error('Error al obtener clientes', error);
            throw error;  // Propaga el error
        }
    },

    // Método para obtener un cliente específico por ID
    getClienteById: async (id: number): Promise<Cliente> => {
        try {
            const response = await axios.get<Cliente>(`${BASE_URL}/${id}`);
            return response.data;  // Devuelve los datos del cliente solicitado
        } catch (error) {
            console.error('Error al obtener cliente', error);
            throw error;  // Propaga el error
        }
    },

    // Método para crear un nuevo cliente
    createCliente: async (clienteData: Cliente): Promise<Cliente> => {
        try {
            const response = await axios.post<Cliente>(BASE_URL, clienteData);
            return response.data;  // Devuelve los datos del cliente creado
        } catch (error) {
            console.error('Error al crear cliente', error);
            throw error;  // Propaga el error
        }
    },

    // Método para actualizar un cliente existente
    updateCliente: async (id: number, clienteData: Partial<Cliente>): Promise<Cliente> => {
        try {
            const response = await axios.put<Cliente>(`${BASE_URL}/${id}`, clienteData);
            return response.data;  // Devuelve los datos del cliente actualizado
        } catch (error) {
            console.error('Error al actualizar cliente', error);
            throw error;  // Propaga el error
        }
    },

    // Método para eliminar un cliente
    deleteCliente: async (id: number): Promise<void> => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            // No devuelve datos, simplemente confirma la eliminación
        } catch (error) {
            console.error('Error al eliminar cliente', error);
            throw error;  // Propaga el error
        }
    }
};

// Exportamos el servicio para poder usarlo en otras partes de la aplicación
export default clienteService;
