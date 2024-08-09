import styled from 'styled-components'
import { cores } from '../../styles'

export const MainContent = styled.div`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Imagem = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;
  margin-bottom: 56px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const ImageContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branco};
  font-weight: 900;
  margin: 0;
  padding-bottom: 32px;
`

export const Descricao = styled.p`
  font-size: 32px;
  color: ${cores.branco};
  margin: 0;
  font-weight: 100;
  padding-top: 25px;
`
