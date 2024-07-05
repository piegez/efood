import {
  ImageContent,
  Descricao,
  Imagem,
  StyleBannerInt,
  Titulo,
  MainContent
} from './styles'

export type Props = {
  title: string
  description: string
  image: string
}

const BannerInt = ({ title, description, image }: Props) => (
  <>
    <MainContent>
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
    </MainContent>
  </>
)

export default BannerInt
