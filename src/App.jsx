import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🔥 Páginas
import Productos from "./Paginas/productos";
import DetalleProductos from "./Paginas/DetalleProductos";
import Favoritos from "./Paginas/favoritos";
import Carrito from "./Paginas/carrito";
import Administrador from "./Paginas/Administrador";
import LoginPage from "./Paginas/LoginPage";
import RegisterPage from "./Paginas/registro";

// 🔥 Navbar global
import AppNavBar from "./componentes/navbar";

// 🔥 Autenticación (roles + login)
import { useAuth } from "./auth/AuthContext";

function App() {
  const { isAuthenticated, isAdmin } = useAuth();

  // Ruta protegida SOLO para ADMIN
  const AdminRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (!isAdmin) {
      return <Navigate to="/productos" replace />;
    }
    return children;
  };

  // Ruta protegida SOLO para usuarios logueados
  const PrivateRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <AppNavBar />

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProductos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />

        {/* Cliente logueado */}
        <Route
          path="/carrito"
          element={
            <PrivateRoute>
              <Carrito />
            </PrivateRoute>
          }
        />

        {/* ADMIN ONLY */}
        <Route
          path="/administrador"
          element={
            <AdminRoute>
              <Administrador />
            </AdminRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
