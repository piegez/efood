import {
  ImageContent,
  Descricao,
  Imagem,
  StyleBannerInt,
  Titulo
} from './styles'

export type Props = {
  title: string
  description: string
  image: string
}

const BannerInt = ({ title, description, image }: Props) => (
  <>
    <StyleBannerInt>
      <Imagem>
        <img src={image} alt="La Dolce" />
        <ImageContent>
          {' '}
          <Descricao>{description}</Descricao>
          <Titulo>{title}</Titulo>
        </ImageContent>
      </Imagem>
    </StyleBannerInt>
  </>
)

export default BannerInt
