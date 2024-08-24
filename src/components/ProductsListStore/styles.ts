import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
