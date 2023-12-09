import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface UserData {
    nombre: string;
    password: string;
}

function Login() {
    const [userData, setUserData] = useState<UserData>({ nombre: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', userData);
            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                navigate('/home');
            } else {
                setError('No se recibió token');
            }
        } catch (error) {
            setError('Error en el inicio de sesión');
            console.error(error);
        }
    };

    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={userData.nombre}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
        </div>
        <div className="mb-6">
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
        </div>
        <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Iniciar Sesión
            </button>
        </div>
        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
    </form>
</div>

    );
}

export default Login;
