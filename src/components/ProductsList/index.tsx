import Food from '../../models/Restaurant'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurante: Food[]
}
const ProductList = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          <Product
            key={restaurante.title}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            title={restaurante.title}
            rating={restaurante.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
