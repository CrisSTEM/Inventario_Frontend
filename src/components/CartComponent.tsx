// src/components/CartComponent.tsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartComponent = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Función para manejar el checkout
  const handleCheckout = async () => {
    // Aquí deberías agregar la lógica para procesar la compra
    // Por ejemplo, enviar los datos del carrito a tu backend y generar el PDF

    try {
      const response = await fetch('http://tu-backend.com/api/generar-recibo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productos: cart }),
      });
      if (!response.ok) {
        throw new Error('Error al procesar el pedido');
      }
      const pdfBlob = await response.blob();
      // Aquí puedes manejar el blob del PDF, como mostrarlo al usuario o permitir su descarga
    } catch (error) {
      console.error('Error en el checkout:', error);
      // Manejar el error
    }
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map(producto => (
        <div key={producto.id}>
          <span>{producto.nombre} - ${producto.precio}</span>
          <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={handleCheckout}>Proceder al Pago</button>
    </div>
  );
};

export default CartComponent;
