import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import { useEffect, useState } from 'react'
import { Rest } from '../Home'

const Product = () => {
  const [cardapio, setCardapio] = useState<Rest[]>([])
  useEffect(() => {
    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes//${cardapio.cardapio.id}'
    )
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])
  if (!cardapio) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderStore />
      <ProductListStore menu={cardapio} />
    </>
  )
}

export default Product
