import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import headerbackground from '../../assets/images/fundoheader.png'
import logo from '../../assets/images/logo.png'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header2Bg style={{ backgroundImage: `url(${headerbackground})` }}>
      <S.Header2Content>
        <S.LinkRest href="/">Restaurantes</S.LinkRest>
        <img src={logo} alt="EFOOD" />
        <S.CartButton onClick={openCart}>
          {' '}
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.Header2Content>
    </S.Header2Bg>
  )
}

export default HeaderStore
