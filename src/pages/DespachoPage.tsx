// src/pages/Despacho.tsx
import React from 'react'; // Importa React para usar JSX
import Layout from '../components/Layout'; // Importa el componente Layout desde la carpeta de componentes
import VentasList from '../components/venta/VentasList'; // Importa el componente VentasList desde la carpeta de componentes de venta

// Define el componente DespachoPage como una función que devuelve un componente de React
const DespachoPage: React.FC = () => {
  // Lo que devuelve este componente
  return (
    // Utiliza el componente Layout como contenedor para la estructura de la página
    <Layout>
        {/* Incluye el componente VentasList que mostrará una lista de ventas */}
        <VentasList />
    </Layout>
  );
};

export default DespachoPage; // Exporta el componente DespachoPage para ser usado en otras partes de la aplicación
