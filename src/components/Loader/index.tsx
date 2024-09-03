import { PuffLoader } from 'react-spinners'
import { ContainerLoader } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <ContainerLoader>
    <PuffLoader color={colors.orange} />
  </ContainerLoader>
)

export default Loader
