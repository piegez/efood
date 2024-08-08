import { Rest } from '../../pages/Home'
import ProductItem from '../ProductStore'
import { Container, List } from './styles'

export type Props = {
  menu: Rest[]
}

const ProductListStore = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <ProductItem
            key={''}
            description={menu.cardapio.descricao}
            image={menu.cardapio.foto}
            title={menu.cardapio.nome}
            id={menu.cardapio.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListStore
