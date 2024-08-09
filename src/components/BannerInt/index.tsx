import { Rest } from '../../pages/Home'
import { Descricao, ImageContent, Imagem, MainContent, Titulo } from './styles'

type Props = {
  banner: Rest
}

const Banner = ({ banner }: Props) => (
  <Imagem style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <MainContent>
        <ImageContent>
          <Descricao>{banner.tipo}</Descricao>
          <Titulo>{banner.titulo}</Titulo>
        </ImageContent>
      </MainContent>
    </div>
  </Imagem>
)

export default Banner
