import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tags/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    font-size: 14px;
    text-align: center;
    color: ${cores.laranja};
    background-color: ${cores.amareloClaro};
    width: 304px;
    height: 24px;
    margin: 0px 8px 8px 8px;
    display: inline-block;
  }
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 304px;
  max-height: 167px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  margin-left: 8px;
  margin-top: 8px;
`
export const Image = styled.div`
  position: relative;
  img {
    padding: 8px;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  display: block;
  margin-left: 8px;
  color: ${cores.branco};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin: 8px 8px;
  color: ${cores.branco};
`
