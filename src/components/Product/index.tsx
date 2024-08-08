import { ButtonLink } from '../Button/styles'
import Rating from '../Rating'
import Tag from '../Tags'
import { Card, Descricao, Infos, Titulo, Image } from './styles'

type Props = {
  title: string
  description: string
  infos: string
  image: string
  rating: string
  id: number
}
const Product = ({ title, description, infos, image, rating, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <Image>
        <img src={image} alt={title} />
      </Image>
      <Infos>
        <Tag key={infos}>{infos}</Tag>
      </Infos>
      <Rating>{rating}</Rating>
      <Titulo>{title}</Titulo>
      <Descricao>{getDescricao(description)}</Descricao>
      <ButtonLink type="link" to={`/restaurantes/${id}`} title="Saiba mais">
        Saiba mais
      </ButtonLink>
    </Card>
  )
}

export default Product
