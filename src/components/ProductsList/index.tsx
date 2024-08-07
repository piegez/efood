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
          <Product
            key={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.tipo}
            title={restaurante.titulo}
            rating={restaurante.avaliacao}
            link={''}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
