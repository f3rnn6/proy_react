import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      navigate("/administrador");
    } else {
      alert("Usuario o contraseña incorrectos. Usa: admin / 1234");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={!username || !password}
          >
            Entrar
          </button>



          {/* 🔽 Botón de texto para registrarse */}
          <p className="login-register-text">
            ¿No tienes cuenta?{" "}
            <span className="register-link" onClick={() => navigate("/registro")}>
              Crear cuenta
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;
