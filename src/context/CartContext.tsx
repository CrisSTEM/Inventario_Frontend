// src/context/CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Definiendo la estructura de un producto (ajusta según tus necesidades)
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  // Agrega cualquier otro campo que necesites
}

// Definiendo la estructura del contexto del carrito
interface CartContextType {
  cart: Producto[];
  addToCart: (producto: Producto) => void;
  removeFromCart: (productoId: number) => void;
}

// Creando el contexto con un valor predeterminado
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Definiendo las propiedades del CartProvider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart([...cart, producto]);
  };

  const removeFromCart = (productoId: number) => {
    setCart(cart.filter(producto => producto.id !== productoId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
