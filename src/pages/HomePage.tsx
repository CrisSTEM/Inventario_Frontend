// src/pages/HomePage.tsx
// Importa React y la función 'FC' (Functional Component) de la biblioteca 'react'
import React from 'react';
// Importa el componente 'Layout' desde la carpeta de componentes
import Layout from '../components/Layout';

// Define un componente funcional 'HomePage' usando TypeScript
const HomePage: React.FC = () => {
  // Retorna el JSX del componente
  return (
    // Utiliza el componente 'Layout' como contenedor principal
    <Layout>
      {/* Define un encabezado con una clase de estilo */}
      <header className="text-center my-10">
        {/* Título principal de la página con estilos aplicados */}
        <h1 className="text-4xl font-bold text-gray-800">Bienvenido ackerman</h1>
        {/* Contenedor para el logo de la página */}
        <div className="logo my-5">
          {/* Imagen del logo con ruta relativa y clases de estilo para centrarlo */}
          <img src="/Logo.png" alt="Another Logo" className="mx-auto" />
        </div>
      </header>
    </Layout>
  );
};

// Exporta 'HomePage' como el componente predeterminado del archivo
export default HomePage;
