import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface UserData {
    nombre: string;
    email: string;
    password: string;
    password_confirmation: string;
}

function Register() {
    const [userData, setUserData] = useState<UserData>({ nombre: '', email: '', password: '', password_confirmation: '' });
    const navigate = useNavigate();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
            console.log(response.data);
            navigate('/Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={userData.nombre}
                onChange={handleChange}
            />
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
            <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmar Contraseña"
                value={userData.password_confirmation}
                onChange={handleChange}
            />
            <button type="submit">Registrar</button>
        </form>
    );
}

export default Register;
