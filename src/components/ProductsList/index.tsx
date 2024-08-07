import { Rest } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurante: Rest[]
}
const ProductList = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          // eslint-disable-next-line react/jsx-key
          <Product
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.tipo}
            title={restaurante.titulo}
            rating={restaurante.avaliacao}
            id={restaurante.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
