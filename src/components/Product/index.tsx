import { ButtonLink } from '../Button/styles'
import Rating from '../Rating'
import Tag from '../Tags'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rating: string
  link: string
}
const Product = ({ title, description, infos, image, rating }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Rating>{rating}</Rating>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonLink type="link" title="Saiba mais">
      Saiba mais
    </ButtonLink>
  </Card>
)

export default Product
