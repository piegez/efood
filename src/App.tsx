import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalCss from './styles'
import Home from './pages/Home'
import Product from './pages/LaDolce'
import Footer from './components/Footer'
import Cardapio from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<Product />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />

        <Rotas />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
