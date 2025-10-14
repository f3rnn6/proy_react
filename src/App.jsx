import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './componentes/navbar'
import AppCard from './componentes/Card'
import CatalogoGuitarras from './Paginas/catalogos/Catalogo';
import AppSearch from './componentes/barrabusqueda';

export default function App() {


  return (
   <CatalogoGuitarras/>
  )
}


