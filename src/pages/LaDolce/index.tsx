import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import bannerladolce from '../../assets/images/bannerLaDolce.png'
import BannerInt from '../../components/BannerInt'
import { useEffect, useState } from 'react'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Product = () => {
  const [cardapio, setCardapio] = useState<Cardapio[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  })
  return (
    <>
      <HeaderStore />
      <BannerInt
        title={'La Dolce Vita Trattoria'}
        description={'Italiana'}
        image={bannerladolce}
      />
      <ProductListStore menu={cardapio} />
    </>
  )
}

export default Product
