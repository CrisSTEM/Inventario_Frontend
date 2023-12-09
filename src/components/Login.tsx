import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface UserData {
    email: string;
    password: string;
}

function Login() {
    const [userData, setUserData] = useState<UserData>({ email: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', userData);

            localStorage.setItem('token', response.data.token);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

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

export default Login;
