import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'
import { Props } from '../Button'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.orange};
  margin-bottom: 32px;
  padding: 8px;

  ${ButtonLink} {
    font-size: 14px;
    text-align: center;
    color: ${colors.orange};
    background-color: ${colors.yellow};
    width: 304px;
    height: 24px;
    display: inline-block;
  }
`

export const Capa = styled.div`
  img {
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 304px;
    height: 168px;
    object-fit: cover;
  }
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`
export const Image = styled.div`
  position: relative;

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
      cursor: zoom-in;
    }
  }
`
export const Title = styled.h3`
  font-size: 16px;
  display: block;
  padding: 8px 0px 8px 0px;
  color: ${colors.yellow};
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  max-width: 304px;
  padding-bottom: 8px;
  color: ${colors.yellow};
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
  background-color: ${colors.orange};
  display: block;
  align-items: center;
  justify-content: center;

  header {
    padding-top: 8px;
    padding-right: 8px;
  }
  .popup {
    display: flex;
    padding: 14px 32px 32px 32px;

    .imagem {
      img {
        margin-right: 32px;
        width: 280px;
        height: 280px;
        object-fit: cover;
      }
    }
    .conteudo {
      display: block;
    }
  }

  header {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    img {
      cursor: pointer;
    }
  }

  h2 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    margin-bottom: 16px;
  }

  h4 {
    color: ${colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
  }
`
export const ButtonPopUp = styled(Link)<Props>`
  width: 218px;
  height: 24px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.orange};
  background-color: ${colors.yellow};
  text-decoration: none;
`
