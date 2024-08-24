import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'
import { useGetRestaurantQuery } from '../../services/api'

export type Rest = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export interface Cardapio {
  categoria: string
  nota: string
  itens: Cardapio[]
  capa: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: pratos } = useGetRestaurantQuery()

  const restauranteArray: Rest[] = Array.isArray(pratos) ? pratos : []

  return (
    <>
      <Header />
      <ProductList restaurante={restauranteArray} />
    </>
  )
}

export default Home
