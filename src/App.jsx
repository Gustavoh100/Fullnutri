import { useState } from 'react'

//import do Router 
import { Route,Routes } from 'react-router-dom'

//Aba  de navegação e o footer 
import Header from "./Component/Header"
import Footer from "./Component/Footer"

//Paginas  dentro do site 
import SingUp from "./Pages/SingUp"
import Cadastro from "./Pages/Cadastro"
import Cardapio from "./Pages/Cardapio"
import Monteprato from "./Pages/Monteprato"
import Planoassinatura from "./Pages/Planoassinatura"
import Contatos from "./Pages/Contatos"
import Error from "./Pages/Error"
import Terms from "./Pages/Terms"
import Home from './Pages/Home'

import './App.css'


function App() {

  return (
    <>
 
  <Header />

<Routes>

<Route path="/" element={<Home />} /> 

<Route path="/singup" element={<SingUp />} />

<Route path="/cadastro" element={<Cadastro />} />

<Route path="/cardapio" element={<Cardapio />} />

<Route path="/monteprato" element={<Monteprato />} />

<Route path="/planoassinatura" element={<Planoassinatura />} />

<Route path="/Contatos" element={<Contatos />} />

<Route path="/Error" element={<Error />} />

<Route path="/Terms" element={<Terms />} />

</Routes>
<Footer  />

    </>
  )
}

export default App
