import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './componentes/navbar'
import AppCard from './componentes/Card'
import CatalogoGuitarras from './Paginas/catalogos/Catalogo-guitarra';
import AppSearch from './componentes/barrabusqueda';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogoAccesorios from './Paginas/catalogos/Catalogo-accesorios';

export default function App() {


  return (
   <CatalogoAccesorios/>
  )
}


