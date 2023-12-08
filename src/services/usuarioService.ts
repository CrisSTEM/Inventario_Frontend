import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/usuarios';

const usuarioService = {
    getAllUsuarios: async () => {
        try {
            const response = await axios.get(baseURL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener usuarios', error);
            throw error;
        }
    },

    createUsuario: async (userData: { nombre: string; email: string; password: string }) => {
        try {
            const response = await axios.post(baseURL, userData);
            return response.data;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    },

    getUsuarioById: async (id: number) => {
        try {
            const response = await axios.get(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener usuario', error);
            throw error;
        }
    },

    updateUsuario: async (id: number, userData: { nombre?: string; email?: string; password?: string }) => {
        try {
            const response = await axios.put(`${baseURL}/${id}`, userData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar usuario', error);
            throw error;
        }
    },

    deleteUsuario: async (id: number) => {
        try {
            const response = await axios.delete(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al eliminar usuario', error);
            throw error;
        }
    },
};

export default usuarioService;
