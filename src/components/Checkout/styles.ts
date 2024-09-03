import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Content = styled.div`
  button,
  submit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4px 0;
    margin: 4px 0;
    max-width: none;
    font-size: 14px;
    color: ${colors.orange};
    background-color: ${colors.yellow};
    border: none;
    cursor: pointer;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    font-size: 14px;
    font-weight: bold;
    color: #4b4b4b;
    background-color: ${colors.yellow};
    border: 1px solid ${colors.orange};
    padding: 8px;
    margin-bottom: 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`
