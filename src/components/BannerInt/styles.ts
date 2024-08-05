import styled from 'styled-components'
import { cores } from '../../styles'

export const MainContent = styled.div`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyleBannerInt = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: cover;
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  img {
    width: 100vw;
    height: auto;
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
