import axios from "axios";

export const API_URL = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Token automático
api.interceptors.request.use((config) => {
  const session = localStorage.getItem("melody_session");
  if (session) {
    const { token } = JSON.parse(session);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---- Endpoints que ya usamos ----

// Productos
export const getProductos = async () => {
  const res = await api.get("/productos");
  return res.data;
};

export const getProductoPorId = async (id) => {
  const res = await api.get(`/productos/${id}`);
  return res.data;
};


export const getCarrito = async () => {
  const res = await api.get("/cliente/carrito");
  return res.data;
};

export const agregarAlCarrito = async (productoId, cantidad = 1) => {
  const res = await api.post("/cliente/carrito/agregar", null, {
    params: { productoId, cantidad }
  });
  return res.data;
};

export const vaciarCarrito = async () => {
  const res = await api.delete("/cliente/carrito/vaciar");
  return res.data;
};

export const crearProducto = async (producto) => {
  const res = await api.post("/admin/productos", producto);
  return res.data;
};

export const actualizarProducto = async (id, producto) => {
  const res = await api.put(`/admin/productos/${id}`, producto);
  return res.data;
};

export const eliminarProducto = async (id) => {
  const res = await api.delete(`/admin/productos/${id}`);
  return res.data;
};