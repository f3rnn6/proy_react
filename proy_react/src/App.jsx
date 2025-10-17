import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Routes>
      {/* La ruta base (/) es el inicio de sesión */}
      <Route path="/" element={<LoginPage />} />
      {/* La ruta /home es la página principal */}
      <Route path="/home" element={<HomePage />} />
      {/* Ruta 404 opcional */}
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}

export default App;