import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './componentes/navbar'
import AppCard from './componentes/Card'
import CatalogoGuitarras from './Paginas/catalogos/Catalogo-guitarra';
import AppSearch from './componentes/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogoAccesorios from './Paginas/catalogos/Catalogo-accesorios';
import CatalogoTeclados from './Paginas/catalogos/Catalogo-teclados';
import CatalogoBaterias from './Paginas/catalogos/Catalogo-baterias';
export default function App() {


  return (
   <CatalogoBaterias/>
  )
}


