// src/components/Layout.tsx
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
              {/* Suponiendo que el logo es una imagen, la puedes insertar así */}
              <img src="../../public/Logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="nav-links flex gap-4">
              {/* Agrega tus enlaces de navegación aquí */}
              <a href="/" className="text-gray-600 hover:text-gray-800 transition duration-300">INICIO</a>
              <a href="/clientes" className="text-gray-600 hover:text-gray-800 transition duration-300">CLIENTES</a>
              <a href="/productos" className="text-gray-600 hover:text-gray-800 transition duration-300">PRODUCTOS</a>
              <a href="/pedidos" className="text-gray-600 hover:text-gray-800 transition duration-300">PEDIDOS</a>
              <a href="/despacho" className="text-gray-600 hover:text-gray-800 transition duration-300">DESPACHO</a>
              <a href="/salir" className="text-gray-600 hover:text-gray-800 transition duration-300">SALIR</a>
            </div>
      </nav>
      <header className="text-center my-10">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido ackerman</h1>
            <div className="logo my-5">
              <img src="../../public/Logo.png" alt="Another Logo" className="mx-auto" />
            </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
