

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
export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/productos" element={<Productos />} /> 
        <Route path="/catalogobaterias" element={<CatalogoBaterias />} /> 
        <Route path="/catalogoguitarras" element={<CatalogoGuitarras />} /> 
        <Route path="/catalogoaccesorios" element={<CatalogoAccesorios />} /> 
        <Route path="/catalogoteclados" element={<CatalogoTeclados/>} /> 
        <Route path="/favoritos" element={<Favoritos/>} /> 
        <Route path="/detalleproductos/:id" element={<DetalleProductos/>} /> 
      </Routes>
    </Router>
  );
}



