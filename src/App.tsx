import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Cart from './components/Cart'
import Rotas from './routes'
import Footer from './components/Footer'

import GlobalCss from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
