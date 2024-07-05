import styled from 'styled-components'
import { cores } from '../../styles'

export const Header2Bg = styled.header`
  font-weight: bold;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 170px;
  padding-right: 170px;

  a {
    text-decoration: none;
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 18px;
  }
`

export const Header2Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`

export const LinkRest = styled.a`
  margin-right: auto;
`

export const LinkCart = styled.a`
  margin-left: auto;
`
