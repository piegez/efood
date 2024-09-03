import ProductItem from '../ProductStore'

import * as S from './styles'

export type Props = {
  menu: Rest
}

const ProductListStore = ({ menu }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {menu.cardapio.map((menu) => (
            <ProductItem
              key={''}
              descricao={menu.descricao}
              image={menu.foto}
              title={menu.nome}
              id={menu.id}
              preco={menu.preco}
              porcao={menu.porcao}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductListStore
