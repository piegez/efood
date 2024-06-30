import { HeaderBg, HeaderContent, Title } from './styles'
import fundoheader from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBg style={{ backgroundImage: `url(${fundoheader})` }}>
    <HeaderContent>
      <img src={logo} alt="EFOOD" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContent>
  </HeaderBg>
)

export default Header
