import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const USERS_KEY = "tg_users";
const SESSION_KEY = "tg_session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const getUsers = () => {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  };

  const saveUsers = (list) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(list));
  };

  const register = ({ nombre, apellido, username, password, role = "user" }) => {
    const users = getUsers();
    const exists = users.some(
      (u) => u.username?.toLowerCase() === username?.toLowerCase()
    );
    if (exists) throw new Error("El nombre de usuario ya está registrado");
    const newUser = { nombre, apellido, username, password, role };
    saveUsers([...users, newUser]);
    return newUser;
  };

  const login = async (username, password) => {
    const users = getUsers();
    const found = users.find(
      (u) =>
        u.username?.toLowerCase() === username?.toLowerCase() &&
        u.password === password
    );
    if (!found) throw new Error("Usuario o contraseña incorrectos");
    localStorage.setItem(SESSION_KEY, JSON.stringify(found));
    setUser(found);
    return found;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const value = { user, login, logout, register };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}