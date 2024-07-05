import FoodItem from '../../models/FoodItem'
import ProductItem from '../ProductStore'
import { Container, List } from './styles'
export type Props = {
  restaurante: FoodItem[]
}
const ProductListStore = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          <ProductItem
            key={restaurante.title}
            description={restaurante.description}
            image={restaurante.image}
            title={restaurante.title}
            link={restaurante.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListStore
