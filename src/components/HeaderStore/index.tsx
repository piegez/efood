import { Header2Bg, Header2Content } from './styles'
import fundoheader from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'

const HeaderStore = () => (
  <Header2Bg style={{ backgroundImage: `url(${fundoheader})` }}>
    <Header2Content>
      <img src={logo} alt="EFOOD" />
    </Header2Content>
  </Header2Bg>
)

export default HeaderStore
