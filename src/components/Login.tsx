// Importación de los hooks y librerías necesarias.
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Definición de la interfaz para los datos del usuario.
interface UserData {
    email: string;
    password: string;
}

// Componente funcional 'Login'.
function Login() {
    // Estado para almacenar los datos del usuario (correo electrónico y contraseña).
    const [userData, setUserData] = useState<UserData>({ email: '', password: '' });

    // Hook para la navegación programática entre rutas.
    const navigate = useNavigate();

    // Manejador de cambios en los campos del formulario.
    // Actualiza el estado del componente con los valores ingresados.
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Manejador para el envío del formulario.
    // Realiza una solicitud POST para iniciar sesión.
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Previene la recarga de la página.
        try {
            // Realiza una solicitud HTTP a la API de login.
            const response = await axios.post('http://127.0.0.1:8000/api/login', userData);

            // Almacena el token recibido en el almacenamiento local.
            localStorage.setItem('token', response.data.token);

            // Navega a la página de inicio una vez que el inicio de sesión es exitoso.
            navigate('/home');
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir durante la solicitud.
            console.error(error);
        }
    };

    // Renderiza el formulario de inicio de sesión.
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={handleChange}
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}

// Exporta el componente para su uso en otras partes de la aplicación.
export default Login;
