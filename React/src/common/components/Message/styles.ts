import styled from 'styled-components'
import { IMessageProps } from '.'

interface IContainer {
  type: IMessageProps
}
const getColor = (type: string) => {
  switch (type) {
    case 'menor':
    case 'maior':
      return '#EF6C00'
    case 'acerto':
      return '#32BF00'
    case 'error':
      return '#CC3300'
    default:
      return '#000'
  }
}
export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  color: ${(props) => getColor(props.type)};
`
