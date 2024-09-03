import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
    color: ${colors.orange};
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

export const Header2Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`

export const LinkRest = styled.a`
  margin-right: auto;
  @media (max-width: ${breakpoints.desktop}) {
    margin-right: 20px;
  }
`

export const CartButton = styled.a`
  margin-left: auto;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 20px;
  }
`
