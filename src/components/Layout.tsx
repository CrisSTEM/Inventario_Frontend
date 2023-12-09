// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout');
      // Redirigir al usuario al Login después del logout
      navigate('/Login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      // Manejar errores aquí (opcionalmente mostrar un mensaje al usuario)
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
