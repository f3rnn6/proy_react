import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");      // antes username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const session = await login(email, password);
      // session.rol viene del backend: "ADMIN" o "CLIENTE"

      if (session.rol === "ADMIN") {
        navigate("/administrador");
      } else {
        // CLIENTE u otro → lo mandamos al catálogo
        navigate("/productos");
      }
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-group">
            <label htmlFor="email" className="login-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="login-group">
            <label htmlFor="password" className="login-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">
            Ingresar
          </button>

          <div className="login-register-text">
            ¿No tienes cuenta?{" "}
            <span
              className="register-link"
              onClick={() => navigate("/registro")}
            >
              Regístrate
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
