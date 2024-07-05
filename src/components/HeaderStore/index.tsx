import { Header2Bg, Header2Content, LinkCart, LinkRest } from './styles'
import fundoheader from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'

const HeaderStore = () => (
  <Header2Bg style={{ backgroundImage: `url(${fundoheader})` }}>
    <Header2Content>
      <LinkRest href="/">Restaurantes</LinkRest>
      <img src={logo} alt="EFOOD" />
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </Header2Content>
  </Header2Bg>
)

export default HeaderStore
