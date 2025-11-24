import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

// Crear instancia de Axios con baseURL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// -------------------------------------------------------------
// 🔥 INTERCEPTOR REQUEST → Agrega token JWT automáticamente
// -------------------------------------------------------------
api.interceptors.request.use((config) => {
  const session = localStorage.getItem("melody_session");

  if (session) {
    const { token } = JSON.parse(session);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// -------------------------------------------------------------
// 🔥 INTERCEPTOR RESPONSE → Manejo global de errores 401 / 403
// -------------------------------------------------------------
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.warn("⛔ Acceso no autorizado");
    }
    return Promise.reject(error);
  }
);

// =================================================================
// 🟦 CRUD DE PRODUCTOS (USADO POR ADMINISTRADOR Y DETALLEPRODUCTO)
// =================================================================

// 🔵 Obtener todos los productos
export const getProductos = async () => {
  const res = await api.get("/productos");
  return res.data;
};

// 🔵 Obtener un producto por ID
export const getProductoPorId = async (id) => {
  const res = await api.get(`/productos/${id}`);
  return res.data;
};

// 🔴 Crear producto (solo ADMIN)
export const crearProducto = async (producto) => {
  const res = await api.post("/productos", producto);
  return res.data;
};

// 🟡 Actualizar producto (solo ADMIN)
export const actualizarProducto = async (id, producto) => {
  const res = await api.put(`/productos/${id}`, producto);
  return res.data;
};

// 🔴 Eliminar producto (solo ADMIN)
export const eliminarProducto = async (id) => {
  await api.delete(`/productos/${id}`);
};

// =================================================================
// 🟩 API CARRITO (CLIENTE)
// =================================================================

// Obtener carrito del usuario actual
export const getCarrito = async () => {
  const res = await api.get("/cliente/carrito");
  return res.data;
};

// Agregar producto al carrito
export const agregarAlCarrito = async (productoId, cantidad = 1) => {
  const res = await api.post("/cliente/carrito/agregar", {
    productoId,
    cantidad,
  });
  return res.data;
};

// Actualizar cantidad de un item
export const actualizarItemCarrito = async (itemId, cantidad) => {
  const res = await api.put(`/cliente/carrito/${itemId}`, { cantidad });
  return res.data;
};

// Eliminar un item del carrito
export const eliminarItemCarrito = async (itemId) => {
  await api.delete(`/cliente/carrito/${itemId}`);
};

// Vaciar carrito
export const vaciarCarrito = async () => {
  await api.delete("/cliente/carrito/vaciar");
};

export const getProductosPorCategoria = async (categoria) => {
  const res = await api.get(`/productos/categoria/${categoria}`);
  return res.data;
};


export default api;
