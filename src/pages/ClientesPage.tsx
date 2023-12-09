// src/pages/ClientesPage.tsx

// Importaciones de React y otros componentes necesarios.
import React, { useState } from 'react'; // React y su hook useState para el manejo de estados.
import Layout from '../components/Layout'; // Componente Layout para la estructura básica de la página.
import ClientesComponent from '../components/cliente/ClientesComponent'; // Componente que muestra los clientes.
import CreateClienteForm from '../components/cliente/CreateClienteForm'; // Formulario para crear nuevos clientes.

// Definición del componente ClientesPage como una función de componente React.
const ClientesPage: React.FC = () => {
  // Estado para controlar la visibilidad del formulario de creación de clientes.
  const [showForm, setShowForm] = useState(false); // Inicialmente, el formulario no se muestra.

  // Función para alternar la visibilidad del formulario.
  const toggleForm = () => {
    setShowForm(!showForm); // Cambia el estado de showForm a su valor opuesto (true/false).
  };

  // Renderizado del componente.
  return (
    // Utilización del componente Layout para la estructura básica.
    <Layout>
        {/* Botón para alternar la visibilidad del formulario. */}
        <button 
          onClick={toggleForm} // Evento onClick que llama a toggleForm al hacer clic.
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" // Clases de estilo para el botón.
        >
          {/* Texto del botón que cambia según el estado del formulario. */}
          {showForm ? 'Ocultar Formulario' : 'Agregar Cliente'}
        </button>
        {/* Renderiza el formulario de creación de clientes si showForm es true. */}
        {showForm && <CreateClienteForm />}
        {/* Componente para mostrar la lista de clientes. */}
        <ClientesComponent />
    </Layout>
  );
};

// Exporta el componente ClientesPage para su uso en otras partes de la aplicación.
export default ClientesPage;
