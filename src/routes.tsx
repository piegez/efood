import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './components/Checkout'
import Product from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
