import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orange};
  color: ${colors.lightYellow};
  font-size: '12px';
  weight: 700;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
`
