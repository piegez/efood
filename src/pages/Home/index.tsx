import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: pratos, isLoading: isLoadingPrato } = useGetRestaurantQuery()

  const restauranteArray: Rest[] = Array.isArray(pratos) ? pratos : []

  return (
    <>
      <Header />
      <ProductList restaurante={restauranteArray} isLoading={isLoadingPrato} />
    </>
  )
}

export default Home
