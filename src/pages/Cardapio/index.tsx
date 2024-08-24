import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import { useParams } from 'react-router-dom'
import Banner from '../../components/BannerInt'
import { useGetCardapioQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: cardapio } = useGetCardapioQuery(id!)

  if (!cardapio) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <HeaderStore />
      <Banner banner={cardapio} />
      <ProductListStore menu={cardapio} />
    </>
  )
}

export default Product
