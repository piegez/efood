import * as S from './styles'

type Props = {
  banner: Rest
}

const Banner = ({ banner }: Props) => (
  <S.Image style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <S.MainContent>
        <S.ImageContent>
          <S.Description>{banner.tipo}</S.Description>
          <S.Title>{banner.titulo}</S.Title>
        </S.ImageContent>
      </S.MainContent>
    </div>
  </S.Image>
)

export default Banner
