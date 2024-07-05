import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalCss from './styles'
import Home from './pages/Home'
import LaDolce from './pages/LaDolce'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<LaDolce />} />
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
