import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const RatingContainer = styled.div`
  color: ${colors.orange};
  font-size: 18px;
  font-weight: 700;
  padding: 4px 6px;
  display: flex;
  margin-right: 8px;
  margin-left: 400px;
  position: absolute;
  img {
    margin-left: 8px;
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    top: 225px;
    right: 12px;
    font-size: 16px;
    img {
      margin-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`
