import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tags/styles'
import { ButtonLink } from '../Button/styles'

export const Container = styled.section``

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  img {
    max-width: 100%;
  }
`
