import { FooterStyle, Logo, Social, Text } from './style'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterStyle>
    <Logo>
      <img src={logo} alt="EFOOD" />
    </Logo>
    <Social>
      <a href="#">
        <img src={instagram} alt="INSTAGRAM" />
      </a>
      <a href="#">
        <img src={facebook} alt="FACEBOOK" />
      </a>
      <a href="#">
        <img src={twitter} alt="TWITTER" />
      </a>
    </Social>
    <Text>
      A efood é uma Textlataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Text>
  </FooterStyle>
)

export default Footer
