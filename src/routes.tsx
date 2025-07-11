import { Routes, Route } from 'react-router-dom'

import { Container } from './styles'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

import Footer from './components/Footer'
import Header from './components/Header'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Container>
            <Home />
          </Container>
          <Footer />
        </>
      }
    />
    <Route
      path="/perfil/:id"
      element={
        <>
          <Perfil />
          <Footer />
        </>
      }
    />
  </Routes>
)

export default Rotas
