// Importación de React desde la biblioteca 'react'.
// Esto es necesario para poder usar JSX y componentes de React.
import React from 'react';

// Importación del componente 'Register' desde la carpeta de componentes.
// Este componente es probablemente un formulario o una interfaz relacionada
// con el registro de usuarios.
import Register from '../components/Register';

// Definición del componente 'RegisterPage'.
// Este es un componente funcional de React, indicado por la constante que
// utiliza una función flecha.
const RegisterPage: React.FC = () => {
  // Retorno del JSX del componente.
  // Dentro del JSX, estamos devolviendo el componente 'Register', el cual
  // se espera que maneje todo lo relacionado con el registro de usuarios.
  // Al usar <Register></Register>, estamos instanciando y montando el componente
  // 'Register' en nuestra página de registro.
  return (
    <Register></Register>
  );
};

// Exportación del componente 'RegisterPage'.
// Esto permite que el componente 'RegisterPage' sea importado y utilizado
// en otras partes de la aplicación, como en el sistema de enrutamiento.
export default RegisterPage;
