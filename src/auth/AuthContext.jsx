import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

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
  try {
    const res = await api.post("/usuarios/registrar", {
      nombre,
      email,
      password,
    });

    return res.data;
  } catch (err) {
    throw new Error("Error al registrar usuario");
  }
};


  const login = async (email, password) => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const data = res.data;

    const session = {
      token: data.token,
      email: data.email,
      nombre: data.nombre,
      rol: data.rol,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);

    return session;
  } catch (err) {
    throw new Error("Usuario o contraseña incorrectos");
  }
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
