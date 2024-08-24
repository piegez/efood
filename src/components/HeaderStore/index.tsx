import { Header2Bg, Header2Content, CartButton, LinkRest } from './styles'
import fundoheader from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header2Bg style={{ backgroundImage: `url(${fundoheader})` }}>
      <Header2Content>
        <LinkRest href="/">Restaurantes</LinkRest>
        <img src={logo} alt="EFOOD" />
        <CartButton onClick={openCart}>
          {' '}
          {items.length} produto(s) no carrinho
        </CartButton>
      </Header2Content>
    </Header2Bg>
  )
}

export default HeaderStore
