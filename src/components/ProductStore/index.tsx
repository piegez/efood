import { ButtonLink } from '../Button/styles'
import { Card, Descricao, Titulo, Image, Action } from './styles'
import zoom from '../../assets/images/mais_zoom_1.png'

type Props = {
  title: string
  description: string
  image: string
  id: number
}

const ProductItem = ({ title, description, image, id }: Props) => (
  <Card>
    <Image>
      <img src={image} alt={title} />
      <Action>
        <img src={zoom} alt="Clique para maximizar" />
      </Action>
    </Image>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonLink type="link" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </ButtonLink>
  </Card>
)

export default ProductItem
