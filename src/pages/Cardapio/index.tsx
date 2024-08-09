import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import { useEffect, useState } from 'react'
import { Rest } from '../Home'
import { useParams } from 'react-router-dom'
import Banner from '../../components/BannerInt'

const Product = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Rest>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])
  if (!cardapio) {
    return <h3>Carregando...</h3>
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
