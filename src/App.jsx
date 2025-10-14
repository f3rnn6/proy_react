import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './componentes/navbar'
import AppCard from './componentes/Card'
import CatalogoGuitarras from './Paginas/catalogos/Catalogo-guitarra';
import AppSearch from './componentes/SearchBar';

import CatalogoAccesorios from './Paginas/catalogos/Catalogo-accesorios';
import CatalogoTeclados from './Paginas/catalogos/Catalogo-teclados';
import CatalogoBaterias from './Paginas/catalogos/Catalogo-baterias';
import Favoritos from './Paginas/favoritos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogoBaterias />} /> 
        <Route path="/catalogoguitarras" element={<CatalogoGuitarras />} /> 
        <Route path="/catalogoaccesorios" element={<CatalogoAccesorios />} /> 
        <Route path="/catalogoteclados" element={<CatalogoTeclados/>} /> 
        <Route path="/favoritos" element={<Favoritos/>} /> 
      </Routes>
    </Router>
  );
}



