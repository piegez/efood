import { Rest } from '../../pages/Home'
import { Cardapio } from '../../pages/LaDolce'
import ProductItem from '../ProductStore'
import { Container, List } from './styles'
export type Props = {
  menu: Cardapio[]
}

const ProductListStore = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <ProductItem
            key={menu.nome}
            description={menu.descricao}
            image={menu.foto}
            title={menu.nome}
            link={''}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListStore
