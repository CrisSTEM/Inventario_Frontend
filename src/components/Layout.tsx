// src/components/Layout.tsx
import React, { ReactNode } from 'react'; // Importa React y el tipo ReactNode de la biblioteca 'react'.
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom para la navegación.

// Define el tipo de las props que recibe el componente Layout.
type LayoutProps = {
  children: ReactNode; // children es un nodo React, puede ser cualquier elemento JSX.
};

// Define el componente Layout como una función que recibe las props LayoutProps.
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate para la navegación.

  // Define la función asincrónica handleLogout para manejar el cierre de sesión.
  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout'); // Realiza una petición POST para cerrar sesión.
      navigate('/Login'); // Redirige al usuario a la página de Login después del logout.
    } catch (error) {
      console.error('Error al cerrar sesión', error); // Captura y muestra errores en la consola.
      // Aquí podrías manejar errores, como mostrar un mensaje al usuario.
    }
  };
  
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
              {/* Suponiendo que el logo es una imagen, la puedes insertar así */}
              <img src="/Logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="nav-links flex gap-4">
              {/* Agrega tus enlaces de navegación aquí */}
              <a href="/Home" className="text-gray-600 hover:text-gray-800 transition duration-300">INICIO</a>
              <a href="/clientes" className="text-gray-600 hover:text-gray-800 transition duration-300">CLIENTES</a>
              <a href="/productos" className="text-gray-600 hover:text-gray-800 transition duration-300">PRODUCTOS</a>
              <a href="/pedidos" className="text-gray-600 hover:text-gray-800 transition duration-300">PEDIDOS</a>
              <a href="/despacho" className="text-gray-600 hover:text-gray-800 transition duration-300">DESPACHO</a>
              <a href="/Login" onClick={handleLogout} className="text-gray-600 hover:text-gray-800 transition duration-300">SALIR</a>
            </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
