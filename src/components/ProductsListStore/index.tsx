import { Rest } from '../../pages/Home'
import ProductItem from '../ProductStore'
import { Container, List } from './styles'

export type Props = {
  menu: Rest
}

const ProductListStore = ({ menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {menu.cardapio.map((menu) => (
            <ProductItem
              key={''}
              description={menu.descricao}
              image={menu.foto}
              title={menu.nome}
              id={menu.id}
              preco={menu.preco}
              porcao={menu.porcao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductListStore
