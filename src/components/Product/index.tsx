import Rating from '../Rating'
import Tag from '../Tags'

import { ButtonLink } from '../Button/styles'
import * as S from './styles'

type Props = {
  title: string
  descricao: string
  infos: string
  image: string
  rating: string
  id: number
  destacado?: boolean
}
const Product = ({
  title,
  descricao,
  infos,
  image,
  rating,
  id,
  destacado
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }
  return (
    <S.Card title="Clique aqui para ver mais detalhes do prato">
      <S.Image>
        <img src={image} alt={title} />
      </S.Image>
      <S.Infos>
        {destacado && (
          <S.Highlighted>
            <span>Destaque do dia</span>
          </S.Highlighted>
        )}
        <Tag key={infos}>{infos}</Tag>
      </S.Infos>
      <Rating>{rating}</Rating>
      <S.Title>{title}</S.Title>
      <S.Description>{getDescription(descricao)}</S.Description>
      <ButtonLink type="link" to={`/restaurantes/${id}`} title="Saiba mais">
        Saiba mais
      </ButtonLink>
    </S.Card>
  )
}

export default Product
