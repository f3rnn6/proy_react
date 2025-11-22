import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Aquí conectarás al backend después
    console.log("Usuario registrado:", form);
    navigate("/login");
  };

  return (
    <div className="registro-page">
      <div className="registro-card">
        <h2 className="registro-title">Crear Cuenta</h2>
        <p className="registro-subtitle">Únete a Melody Store 🎵</p>

        {error && <p className="registro-error">{error}</p>}

        <form onSubmit={handleSubmit} className="registro-form">

          <div className="registro-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="registro-input"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-group">
            <label>Correo</label>
            <input
              type="email"
              name="email"
              className="registro-input"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="registro-input"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-group">
            <label>Repetir contraseña</label>
            <input
              type="password"
              name="password2"
              className="registro-input"
              value={form.password2}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="registro-button">
            Crear Cuenta
          </button>

          <p className="registro-login-text">
            ¿Ya tienes cuenta?{" "}
            <span className="registro-link" onClick={() => navigate("/login")}>
              Iniciar sesión
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
