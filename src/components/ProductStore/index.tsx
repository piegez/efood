import { ButtonLink } from '../Button/styles'
import { Card, Descricao, Titulo, Image, Action } from './styles'
import zoom from '../../assets/images/mais_zoom_1.png'

type Props = {
  title: string
  description: string
  image: string
  link: string
}

const mock: Props[] = [
  {
    title: 'teste',
    description: 'teste',
    image: 'teste',
    link: 'teste'
  }
]
const ProductItem = ({ link }: Props) => (
  <Card>
    {mock.map((media, index) => (
      <>
        <Image>
          <img src={media.image} alt={media.title} />
          <Action>
            <img src={zoom} alt="Clique para maximizar" />
          </Action>
        </Image>
        <Titulo>{media.title}</Titulo>
        <Descricao>{media.description}</Descricao>
      </>
    ))}
    <ButtonLink type="link" to={link} title="Saiba mais">
      Adicionar ao carrinho
    </ButtonLink>
  </Card>
)

export default ProductItem
