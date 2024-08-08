import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalCss from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'
import Product from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Product />} />
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
