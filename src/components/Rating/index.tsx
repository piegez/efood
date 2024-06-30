import { RatingContainer } from './styles'
import star from '../../assets/images/star.png'

export type Props = {
  children: string
}
const Rating = ({ children }: Props) => (
  <RatingContainer>
    {children}
    <img src={star} />
  </RatingContainer>
)

export default Rating
