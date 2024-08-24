import { useState } from 'react'
import { ButtonLink } from '../Button/styles'
import {
  Card,
  Descricao,
  Titulo,
  Image,
  Action,
  Capa,
  Modal,
  ModalContent,
  ButtonPopUp
} from './styles'
import zoom from '../../assets/images/mais_zoom_1.png'
import close from '../../assets/images/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { add, clearAlert, open } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'

type Props = {
  title: string
  description: string
  image: string
  id: number
  preco: number
  porcao: string
}

interface ModalState {
  isVisible: boolean
}

const ProductItem = ({
  id,
  title,
  description,
  image,
  preco,
  porcao
}: Props) => {
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

  const getDescricao = (descricao: string) => {
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
    const item: Cardapio = {
      categoria: '', // Adapte conforme necessário
      nota: '', // Adapte conforme necessário
      itens: [], // Adapte conforme necessário
      capa: image,
      foto: image,
      preco,
      id,
      nome: title,
      descricao: description,
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
      <Card>
        <Image>
          <Capa>
            <img src={image} alt={title} />
          </Capa>
          <Action>
            <img src={zoom} alt="Clique para maximizar" onClick={openModal} />
          </Action>
        </Image>
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <ButtonLink
          type="link"
          title="Adicionar ao carrinho"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </ButtonLink>
      </Card>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
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
                {description} <br /> <br />
                Serve de: {porcao}
              </h4>
              <ButtonPopUp
                type="link"
                title="Adicionar ao carrinho"
                size="big"
                onClick={addToCart}
              >
                {` Adicionar ao carrinho - R$${preco}`}
              </ButtonPopUp>
            </div>
          </div>
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductItem
