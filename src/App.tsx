// src/App.tsx
import React from 'react'; // Importa React, necesario para componentes y JSX.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter para manejar el enrutamiento en la aplicación.
import HomePage from './pages/HomePage'; // Importa el componente HomePage.
import ClientesPage from './pages/ClientesPage'; // Importa el componente ClientesPage.
import ProductosPage from './pages/ProductosPage'; // Importa el componente ProductosPage.
import PedidosPage from './pages/PedidosPage'; // Importa el componente PedidosPage.
import DespachoPage from './pages/DespachoPage'; // Importa el componente DespachoPage.
import Login from './pages/LoginPage'; // Importa el componente LoginPage.
import Register from './components/Register'; // Importa el componente Register.

const App: React.FC = () => { // Define el componente App como una función de componente de React.
  return (
    <Router> {/* Utiliza Router para envolver las rutas de la aplicación. */}
      <Routes> {/* Define las rutas de la aplicación. */}
        <Route path="/home" element={<HomePage />} /> {/* Ruta para la página de inicio. */}
        <Route path="/clientes" element={<ClientesPage />} /> {/* Ruta para la página de clientes. */}
        <Route path="/productos" element={<ProductosPage />} /> {/* Ruta para la página de productos. */}
        <Route path="/pedidos" element={<PedidosPage />} /> {/* Ruta para la página de pedidos. */}
        <Route path="/despacho" element={<DespachoPage />} /> {/* Ruta para la página de despacho. */}
        <Route path="/salir" element={<HomePage />} /> {/* Ruta para "salir", redirige a la página de inicio. */}
        <Route path="/Login" element={<Login />} /> {/* Ruta para la página de login. */}
        <Route path="/Register" element={<Register />} /> {/* Ruta para la página de registro. */}
      </Routes>
    </Router>
  );
};

export default App; // Exporta el componente App para su uso en otros archivos.
