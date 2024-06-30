import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalCss from './styles'
import Home from './pages/Home'
import Store from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element={<Store />} />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />

        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
