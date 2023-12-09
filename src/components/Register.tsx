// Importa las hooks useState, ChangeEvent y FormEvent de React
import { useState, ChangeEvent, FormEvent } from 'react';
// Importa axios para realizar peticiones HTTP
import axios from 'axios';
// Importa useNavigate de react-router-dom para la navegación programática
import { useNavigate } from 'react-router-dom';

// Define una interfaz para los datos del usuario
interface UserData {
    nombre: string;
    email: string;
    password: string;
    password_confirmation: string;
}

// Define el componente Register
function Register() {
    // Estado para almacenar los datos del usuario. Inicializado con valores vacíos
    const [userData, setUserData] = useState<UserData>({ nombre: '', email: '', password: '', password_confirmation: '' });
    
    // Hook de navegación para redirigir al usuario
    const navigate = useNavigate();

    // Manejador de cambio para los inputs del formulario
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Actualiza el estado del usuario con los nuevos valores
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        try {
            // Realiza una petición POST a la API con los datos del usuario
            const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
            console.log(response.data); // Muestra la respuesta en la consola
            navigate('/Login'); // Redirige al usuario a la página de login
        } catch (error) {
            console.error(error); // Muestra el error en la consola en caso de haberlo
        }
    };

    // Renderiza el formulario de registro
    return (
        <form onSubmit={handleSubmit}>
            {/* Campos de texto para nombre, email y contraseña */}
            <input type="text" name="nombre" placeholder="Nombre" value={userData.nombre} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Contraseña" value={userData.password} onChange={handleChange} />
            <input type="password" name="password_confirmation" placeholder="Confirmar Contraseña" value={userData.password_confirmation} onChange={handleChange} />
            {/* Botón para enviar el formulario */}
            <button type="submit">Registrar</button>
        </form>
    );
}

// Exporta el componente Register para su uso en otras partes de la aplicación
export default Register;
