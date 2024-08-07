import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tags/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  box-shadow: inset 0 0 0 1px ${cores.laranja};
  margin-bottom: 48px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    margin-left: 8px;
    margin-bottom: 8px;
    display: inline-block;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Image = styled.div`
  img {
    width: 100%;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`
