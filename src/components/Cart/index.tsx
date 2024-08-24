import { ButtonPopUp } from '../ProductStore/styles'
import { CartContainer, CartItem, Overlay, Sidebar, Total } from './style'
import test from '../../assets/images/carpacio.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const total = items.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto || test} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R${item.preco.toFixed(2)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Total>Valor total: R${total}</Total>
        <ButtonPopUp
          type={'link'}
          title={'Clique aqui para continuar com a entrega'}
        >
          Continuar com a entrega
        </ButtonPopUp>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
