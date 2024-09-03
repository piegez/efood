import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterStyle = styled.div`
  font-size: 10px;
  background-color: ${colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.div`
  padding-top: 40px;
  padding-bottom: 32px;
`

export const Social = styled.div`
  padding-bottom: 80px;
  img {
    margin-right: 8px;
  }
`

export const Text = styled.div`
  width: 480px;
  padding-bottom: 40px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`
