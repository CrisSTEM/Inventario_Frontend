// productService.ts

const baseUrl = 'http://127.0.0.1:8000/api/productos';

export interface Producto {
  id?: number;
  codigo: string;
  nombre: string;
  existencia: number;
  precio: number;
}

// Mostrar todos los productos
const getAllProductos = async (): Promise<Producto[]> => {
  const response = await fetch(baseUrl);
  return response.json();
};

// Crear un nuevo producto
const createProducto = async (producto: Producto): Promise<Producto> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(producto),
  });
  return response.json();
};

// Mostrar un producto específico
const getProducto = async (id: number): Promise<Producto> => {
  const response = await fetch(`${baseUrl}/${id}`);
  return response.json();
};

// Actualizar un producto
const updateProducto = async (id: number, producto: Producto): Promise<Producto> => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(producto),
  });
  return response.json();
};

// Eliminar un producto
const deleteProducto = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};

export { getAllProductos, createProducto, getProducto, updateProducto, deleteProducto };
