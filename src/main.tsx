// Importamos las dependencias necesarias de React y ReactDOM. 
// React es la biblioteca principal, y ReactDOM nos permite interactuar con el DOM.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el componente principal App de nuestro proyecto.
import App from './App';

// Importamos el archivo de estilos CSS principal.
import './index.css';

// Buscamos el elemento en nuestro HTML donde queremos montar nuestra aplicación React.
const rootElement = document.getElementById('app');

// Si no encontramos el elemento, lanzamos un error. 
// Es importante hacer esta verificación para evitar errores en tiempo de ejecución.
if (!rootElement) throw new Error('Failed to find the root element');

// Creamos la raíz de nuestra aplicación usando ReactDOM.createRoot.
const root = ReactDOM.createRoot(rootElement);

// Renderizamos nuestro componente App dentro del elemento raíz usando el método render.
// React.StrictMode es una herramienta para destacar problemas potenciales en una aplicación.
// No afecta la renderización pero advierte sobre problemas potenciales cuando se está en modo de desarrollo.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Exportamos el componente App por si necesitamos importarlo en otro lugar.
export default App;
