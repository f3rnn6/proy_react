import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

// 🔐 Clave de la sesión en localStorage
const SESSION_KEY = "melody_session";

// 🔗 URL base del backend
const API_URL = "http://localhost:8080/api/v1";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { token, email, nombre, rol }

  // Al cargar la app, recuperar sesión si existe
  useEffect(() => {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (_) {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const register = async ({ nombre, email, password }) => {
    const res = await fetch(`${API_URL}/usuarios/registrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });

    if (!res.ok) {
      const mensaje = await res.text();
      throw new Error(mensaje || "Error al registrar usuario");
    }

    return await res.json();
  };

  // 🔹 Login: llama al backend, guarda token + rol
  const login = async (email, password) => {
    const body = { email, password };

    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Usuario o contraseña incorrectos");
    }

    const data = await res.json();
    // data = { token, email, nombre, rol }

    const session = {
      token: data.token,
      email: data.email,
      nombre: data.nombre,
      rol: data.rol, // "ADMIN" o "CLIENTE"
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);

    return session;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.rol === "ADMIN";
  const isCliente = user?.rol === "CLIENTE";

  const value = { user, isAuthenticated, isAdmin, isCliente, login, logout, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
