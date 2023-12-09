// src/pages/Pedidos.tsx
// Importación de React y componentes necesarios.
import React from 'react'; // Importa React para poder usar JSX.
import Layout from '../components/Layout'; // Importa el componente Layout desde la carpeta de componentes.
import ProductosComponent from '../components/ProductosComponent'; // Importa ProductosComponent, presumiblemente un componente que muestra productos.

// Definición del componente PedidosPage.
// Este componente es una función que retorna JSX.
const PedidosPage: React.FC = () => {
  // El renderizado del componente.
  return (
    // Uso del componente Layout como contenedor.
    // Layout probablemente define la estructura común de una página (como cabecera, pie de página, etc.).
    <Layout>
      {/* Inserción del componente ProductosComponent dentro de Layout.
          ProductosComponent es responsable de mostrar los productos. */}
      <ProductosComponent />
    </Layout>
  );
};

// Exportación del componente PedidosPage para su uso en otras partes de la aplicación.
export default PedidosPage;
