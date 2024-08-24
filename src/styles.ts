import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  amarelo: '#FFEBD9',
  laranja: '#E66767',
  branco: '#FFFFFF',
  amareloClaro: '#FFF8F2'
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
    background-color: ${cores.amareloClaro};
    color: ${cores.laranja}
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
