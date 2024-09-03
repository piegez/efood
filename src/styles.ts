import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow: '#FFEBD9',
  orange: '#E66767',
  white: '#FFFFFF',
  lightYellow: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightYellow};
    color: ${colors.orange}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    }
  }
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
export default GlobalCss
