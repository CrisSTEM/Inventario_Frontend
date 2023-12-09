// Importa React desde la biblioteca 'react'
import React from 'react';
// Importa el componente 'Login' desde la carpeta de componentes
import Login from '../components/Login';

// Define 'LoginPage' como un componente funcional de React.
// Este componente no recibe props, por eso se usa React.FC (Functional Component).
const LoginPage: React.FC = () => {
  // El componente devuelve JSX. En este caso, el componente 'Login'.
  return (
    // Aquí se renderiza el componente 'Login'.
    // Este componente es probablemente donde los usuarios pueden iniciar sesión.
    <Login></Login>
    // Nota: también se podría escribir como <Login /> si no tiene hijos.
  );
};

// Exporta 'LoginPage' como el export por defecto de este módulo.
// Esto permite que otros archivos en tu proyecto importen 'LoginPage'.
export default LoginPage;
