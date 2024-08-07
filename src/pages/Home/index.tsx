import Header from '../../components/Header'
import ProductList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

export type Rest = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [pratos, setPratos] = useState<Rest[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])
  return (
    <>
      <Header />
      <ProductList restaurante={pratos} />
    </>
  )
}

export default Home
