import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogoGuitarras from './Paginas/catalogos/Catalogo-guitarra';
import CatalogoAccesorios from './Paginas/catalogos/Catalogo-accesorios';
import CatalogoTeclados from './Paginas/catalogos/Catalogo-teclados';
import CatalogoBaterias from './Paginas/catalogos/Catalogo-baterias';
import Favoritos from './Paginas/favoritos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetalleProductos from './Paginas/DetalleProductos';
import Productos from './Paginas/productos';
import Administrador from './Paginas/Administrador';
import LoginPage from './Paginas/LoginPage';

// 🔹 Importa los productos originales
import { productos as productosOriginales } from './data/productos';
import { useEffect } from 'react';
import Carrito from './Paginas/carrito';
import RegisterPage from './Paginas/registro';

export default function App() {

  // 🔹 Inicializa localStorage con los productos originales si está vacío
  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    if (!productosGuardados || productosGuardados.length === 0) {
      localStorage.setItem("productos", JSON.stringify(productosOriginales));
      console.log("LocalStorage inicializado con productos originales.");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Productos />} /> 
        <Route path="/carrito" element={<Carrito />} /> 
        <Route path="/registro" element={<RegisterPage />} /> 
        <Route path="/catalogobaterias" element={<CatalogoBaterias />} /> 
        <Route path="/catalogoguitarras" element={<CatalogoGuitarras />} /> 
        <Route path="/catalogoaccesorios" element={<CatalogoAccesorios />} /> 
        <Route path="/catalogoteclados" element={<CatalogoTeclados/>} /> 
        <Route path="/favoritos" element={<Favoritos/>} /> 
        <Route path="/detalleproductos/:id" element={<DetalleProductos/>} /> 
        <Route path="/administrador" element={<Administrador />} /> 
        <Route path="/productos" element={<Productos />} /> 
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}




