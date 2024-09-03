import * as S from './style'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.FooterStyle>
    <S.Logo>
      <img src={logo} alt="EFOOD" />
    </S.Logo>
    <S.Social>
      <a href="#">
        <img src={instagram} alt="INSTAGRAM" />
      </a>
      <a href="#">
        <img src={facebook} alt="FACEBOOK" />
      </a>
      <a href="#">
        <img src={twitter} alt="TWITTER" />
      </a>
    </S.Social>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Text>
  </S.FooterStyle>
)

export default Footer
