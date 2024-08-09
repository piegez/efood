import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;

  ${ButtonLink} {
    font-size: 14px;
    text-align: center;
    color: ${cores.laranja};
    background-color: ${cores.amarelo};
    width: 304px;
    height: 24px;
    margin: 0px 0px 8px 8px;
    display: inline-block;
  }
`

export const Capa = styled.div`
  img {
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`
export const Image = styled.div`
  position: relative;

  img {
    padding: 8px 0px 8px 8px;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
      cursor: pointer;
    }
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  display: block;
  margin-left: 8px;
  color: ${cores.amarelo};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  max-width: 304px;
  padding: 8px 0px 8px 8px;
  color: ${cores.amarelo};
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  z-index: 1;
  background-color: ${cores.laranja};
  padding: 32px;
  display: flex;
  align-items: center;

  .imagem {
    margin-right: 32px;

    img {
      width: 280px;
      height: 280px;
      max-width: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 24px;

    img {
      cursor: pointer;
    }
  }

  h2 {
    color: ${cores.branco};
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    margin-bottom: 16px;
  }

  h4 {
    color: ${cores.branco};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
  }

  ${ButtonLink} {
    width: fit-content;
    padding: 8px 16px;
    margin-top: 16px;
    align-self: flex-start;
    font-size: 14px;
    color: ${cores.laranja};
    background-color: ${cores.amarelo};
    font-weight: bold;
  }
`
