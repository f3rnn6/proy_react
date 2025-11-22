import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/no-autorizado" replace />;

  return children;
}
