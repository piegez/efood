import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { add, clearAlert, open } from '../../store/reducers/cart'

import { ButtonLink } from '../Button/styles'
import * as S from './styles'
import zoom from '../../assets/images/mais_zoom_1.png'
import close from '../../assets/images/close.png'

type Props = {
  title: string
  descricao: string
  image: string
  id: number
  preco: number
  porcao: string
}

interface ModalState {
  isVisible: boolean
}

const ProductItem = ({ id, title, descricao, image, preco, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const openModal = () => {
    setModal({
      isVisible: true
    })
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 235) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()
  const alertMessage = useSelector(
    (state: RootReducer) => state.cart.alertMessage
  )

  const addToCart = () => {
    const item: Menu = {
      categoria: '',
      nota: '',
      itens: [],
      capa: image,
      foto: image,
      preco,
      id,
      nome: title,
      descricao: descricao,
      porcao
    }
    dispatch(add(item))
    dispatch(open())
    if (alertMessage) {
      alert(alertMessage)
      dispatch(clearAlert())
    }
  }

  return (
    <>
      <S.Card>
        <S.Image>
          <S.Capa>
            <img src={image} alt={title} />
          </S.Capa>
          <S.Action>
            <img src={zoom} alt="Clique para maximizar" onClick={openModal} />
          </S.Action>
        </S.Image>
        <S.Title>{title}</S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <ButtonLink
          type="link"
          title="Adicionar ao carrinho"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </ButtonLink>
      </S.Card>

      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img src={close} alt="Clique para fechar" onClick={closeModal} />
          </header>
          <div className="popup">
            <div className="imagem">
              <img src={image} alt={title} />
            </div>
            <div className="conteudo">
              <h2>{title}</h2>
              <h4>
                {descricao} <br /> <br />
                Serve de: {porcao}
              </h4>
              <S.ButtonPopUp
                type="link"
                title="Adicionar ao carrinho"
                size="big"
                onClick={addToCart}
              >
                {` Adicionar ao carrinho - R$${preco}`}
              </S.ButtonPopUp>
            </div>
          </div>
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default ProductItem
