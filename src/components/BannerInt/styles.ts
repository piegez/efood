// import styled from 'styled-components'
// import { cores } from '../../styles'

// export const StyleBannerInt = styled.div`
//   position: relative;
//   padding-bottom: 56px;
//   padding-left: 170px;
//   width: 1366px;
//   height: 280px;
// `

// export const Imagem = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// export const Titulo = styled.h2`
//   font-size: 32px;
//   color: ${cores.branco};
//   font-weight: 900;
// `

// export const Descricao = styled.p`
//   font-size: 24px;
//   color: ${cores.branco};
// `

import styled from 'styled-components'
import { cores } from '../../styles'

export const StyleBannerInt = styled.div`
  position: relative;
  width: 1366px;
  height: 280px;
  overflow: hidden;
  margin-bottom: 56px;
`

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
`

export const ImageContent = styled.div`
  position: absolute;
  top: 24px;
  left: 170px;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branco};
  font-weight: 900;
  margin-bottom: 10px;
  padding-top: 156px;
  weight: 900;
`

export const Descricao = styled.p`
  font-size: 24px;
  color: ${cores.branco};
  margin: 0;
  weight: 100;
`
