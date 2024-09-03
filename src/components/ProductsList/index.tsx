import Loader from '../Loader'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  restaurante: Rest[]
  isLoading: boolean
}
const ProductList = ({ restaurante, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurante.map((restaurante, index) => (
            <Product
              key={restaurante.id}
              descricao={restaurante.descricao}
              image={restaurante.capa}
              infos={restaurante.tipo}
              title={restaurante.titulo}
              rating={restaurante.avaliacao}
              id={restaurante.id}
              destacado={index === 0}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
