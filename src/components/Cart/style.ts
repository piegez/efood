import styled from 'styled-components'
import { colors } from '../../styles'
import fechar from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  .cart-container button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4px 0;
    margin: 8px 0;
    max-width: none;
    font-size: 14px;
    color: ${colors.orange};
    background-color: ${colors.yellow};
    border: none;
    cursor: pointer;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.yellow};
  padding: 8px 8px 12px 8px;
  min-height: 10;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    margin-top: 16px;
    display: block;
    height: 100%;
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Total = styled.p`
  color: ${colors.lightYellow};
  padding: 40px 0 16px 0;
  font-size: 14px;
  font-weight: 700;
  display: block;
`
