// usuarioService.ts
import axios from 'axios';

// URL base del API para realizar las operaciones CRUD de usuarios.
const baseURL = 'http://127.0.0.1:8000/api/usuarios';

// Objeto que contiene los métodos para interactuar con la API de usuarios.
const usuarioService = {
    // Método para obtener todos los usuarios.
    getAllUsuarios: async () => {
        try {
            // Realiza una petición GET a la URL base para obtener todos los usuarios.
            const response = await axios.get(baseURL);
            // Retorna los datos de la respuesta.
            return response.data;
        } catch (error) {
            // Captura y muestra errores en consola, luego los propaga.
            console.error('Error al obtener usuarios', error);
            throw error;
        }
    },

    // Método para obtener un usuario por su ID.
    getUsuarioById: async (id: number) => {
        try {
            // Realiza una petición GET a la URL base/id para obtener un usuario específico.
            const response = await axios.get(`${baseURL}/${id}`);
            // Retorna los datos de la respuesta.
            return response.data;
        } catch (error) {
            // Captura y muestra errores en consola, luego los propaga.
            console.error('Error al obtener usuario', error);
            throw error;
        }
    },

    // Método para crear un nuevo usuario.
    createUsuario: async (userData: { nombre: string; email: string; password: string }) => {
        try {
            // Realiza una petición POST a la URL base con los datos del usuario para crearlo.
            const response = await axios.post(baseURL, userData);
            // Retorna los datos de la respuesta.
            return response.data;
        } catch (error) {
            // Captura y muestra errores en consola, luego los propaga.
            console.error('Error al crear usuario', error);
            throw error;
        }
    },
    
    // Método para actualizar un usuario existente.
    updateUsuario: async (id: number, userData: { nombre?: string; email?: string; password?: string }) => {
        try {
            // Realiza una petición PUT a la URL base/id con los nuevos datos del usuario.
            const response = await axios.put(`${baseURL}/${id}`, userData);
            // Retorna los datos de la respuesta.
            return response.data;
        } catch (error) {
            // Captura y muestra errores en consola, luego los propaga.
            console.error('Error al actualizar usuario', error);
            throw error;
        }
    },

    // Método para eliminar un usuario por su ID.
    deleteUsuario: async (id: number) => {
        try {
            // Realiza una petición DELETE a la URL base/id para eliminar un usuario.
            const response = await axios.delete(`${baseURL}/${id}`);
            // Retorna los datos de la respuesta.
            return response.data;
        } catch (error) {
            // Captura y muestra errores en consola, luego los propaga.
            console.error('Error al eliminar usuario', error);
            throw error;
        }
    },
};

// Exporta el servicio para su uso en otras partes de la aplicación.
export default usuarioService;
