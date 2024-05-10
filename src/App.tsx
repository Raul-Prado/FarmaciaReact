
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './componentes/Footer/Footer'
import ListaCategorias from './componentes/Categoria/ListarCategorias/ListarCategorias'
import FormularioCategoria from './componentes/Categoria/FormCategoria/FormCategoria'
import DeletarCategoria from './componentes/Categoria/DeletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path='/editarcategoria/:id' element={<FormularioCategoria />} />
          <Route path='/cadastrarcategoria' element={<FormularioCategoria />} />
          <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
