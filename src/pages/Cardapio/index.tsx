import { useParams } from 'react-router-dom'

const Cardapio = () => {
  const { id } = useParams()
  return <div>pratos {id}</div>
}

export default Cardapio
