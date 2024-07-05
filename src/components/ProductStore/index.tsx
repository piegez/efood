import { ButtonLink } from '../Button/styles'

import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  link: string
}
const ProductItem = ({ title, description, image, link }: Props) => (
  <Card>
    <img src={image} alt={title} />

    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonLink type="link" to={link} title="Saiba mais">
      Adicionar ao carrinho
    </ButtonLink>
  </Card>
)

export default ProductItem
