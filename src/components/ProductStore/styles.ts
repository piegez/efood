import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tags/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-bottom: 32px;

  img {
    padding: 8px;
  }

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
