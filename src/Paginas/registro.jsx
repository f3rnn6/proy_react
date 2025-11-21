import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const validar = () => {
    const e = {};
    if (!nombre || nombre.trim().length < 1) e.nombre = "El nombre es obligatorio";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    if (!password || password.length < 4) e.password = "La contraseña debe tener al menos 4 caracteres";
    if (password !== password2) e.password2 = "Las contraseñas no coinciden";
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validar()) return;
    setCargando(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/usuarios/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password })
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error en el servidor");
      }

      const created = await res.json();
      setCargando(false);
      navigate("/login");
    } catch (err) {
      setCargando(false);
      setErrores({ servidor: err.message || "Error al registrar" });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Nombre</label>
            <input value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errores.email && <small className="text-danger">{errores.email}</small>}
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {errores.password && <small className="text-danger">{errores.password}</small>}
          </div>

          <div className="input-group">
            <label>Repetir Contraseña</label>
            <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
            {errores.password2 && <small className="text-danger">{errores.password2}</small>}
          </div>

          {errores.servidor && <div className="text-danger mb-2">{errores.servidor}</div>}

          <button type="submit" className="login-button" disabled={cargando}>
            {cargando ? "Registrando..." : "Registrar"}
          </button>

          <div className="login-register-text">
            ¿Ya tienes cuenta? <span className="register-link" onClick={()=>navigate("/login")}>Inicia sesión</span>
          </div>
        </form>
      </div>
    </div>
  );
}
