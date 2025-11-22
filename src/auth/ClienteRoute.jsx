import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ClienteRoute({ children }) {
  const { isAuthenticated, isCliente } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isCliente) return <Navigate to="/no-autorizado" replace />;

  return children;
}
