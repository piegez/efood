import * as S from './styles'
import backgroundheader from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.HeaderBg style={{ backgroundImage: `url(${backgroundheader})` }}>
    <S.HeaderContent>
      <img src={logo} alt="EFOOD" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.HeaderContent>
  </S.HeaderBg>
)

export default Header
