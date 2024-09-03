import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import Checkout from '../Checkout'

import { getTotalPrice, parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './style'
import test from '../../assets/images/carpacio.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleContinueClick = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {showCheckout ? (
          <Checkout onBackToCart={handleBackToCart} />
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto || test} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>R${item.preco.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Total>
                  Valor total: {parseToBrl(getTotalPrice(items))}
                </S.Total>
                <div className="cart-container">
                  <Button
                    onClick={handleContinueClick}
                    type={'button'}
                    title={'Clique aqui para continuar com a entrega'}
                  >
                    Continuar com a entrega
                  </Button>
                </div>
              </>
            ) : (
              <p className="empty-text">O carrinho está vazio.</p>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
