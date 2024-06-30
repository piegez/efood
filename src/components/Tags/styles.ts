import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.amareloClaro};
  font-size: '12px';
  font-weight: 700;
  padding: 4px 6px;
`
