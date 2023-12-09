// Importa React y el hook useState para manejar el estado dentro del componente.
import React, { useState } from 'react';

// Importa componentes específicos para la estructura y características de la página.
import Layout from '../components/Layout';
import ProductosComponent from '../components/producto/ProductosComponent';
import CreateProductoComponent from '../components/producto/CreateProductoForm';

// Define el componente ProductosPage como una función de componente de React.
const ProductosPage: React.FC = () => {
  // Utiliza el hook useState para manejar el estado de visibilidad del formulario.
  // Inicialmente, el formulario no se muestra (false).
  const [showForm, setShowForm] = useState(false);

  // Define una función toggleForm que cambia el estado de showForm.
  // Si showForm es true, lo establece en false, y viceversa.
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // El componente retorna JSX.
  return (
    // Usa el componente Layout para proporcionar una estructura común a la página.
    <Layout>
        {/* Botón para mostrar/ocultar el formulario de creación de productos. */}
        {/* Al hacer clic, se invoca la función toggleForm. */}
        <button 
          onClick={toggleForm}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {/* El texto del botón cambia según el estado de showForm. */}
          {showForm ? 'Ocultar Formulario' : 'Agregar Producto'}
        </button>

        {/* Muestra el componente CreateProductoComponent si showForm es true. */}
        {showForm && <CreateProductoComponent />}

        {/* Muestra siempre el componente ProductosComponent. */}
        <ProductosComponent />
    </Layout>
  );
};

// Exporta el componente ProductosPage para ser utilizado en otras partes de la aplicación.
export default ProductosPage;
