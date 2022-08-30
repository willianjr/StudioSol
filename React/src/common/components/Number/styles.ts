import styled from 'styled-components'

export const DisplayNumber = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Container = styled.svg`
  margin: 0.05rem;
  width: 50% !important;
  &:nth-child(2),
  &:nth-child(3) {
    margin-left: -12rem;
  }
  @media screen and (max-width: 680px) {
    &:nth-child(2),
    &:nth-child(3) {
      margin-left: -2rem;
    }
  }
  @media screen and (min-width: 610px) and (max-width: 1800px) {
    &:nth-child(2),
    &:nth-child(3) {
      margin-left: -3rem;
    }
  }
`
interface IPath {
  active?: boolean
  error?: boolean
  success?: boolean
}

const getColor = ({ active, error, success }: IPath) =>
  active ? (error ? '#CC3300' : success ? '#32BF00' : '#000') : '#DDD'
export const A = styled.path.attrs({
  d: 'M10,8L14,4L42,4L46,8L42,12L14,12L10,8z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const B = styled.path.attrs({
  d: 'M8,10L12,14L12,42L8,46L4,42L4,14L8,10z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const C = styled.path.attrs({
  d: 'M48,10L52,14L52,42L48,46L44,42L44,14L48,10z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const D = styled.path.attrs({
  d: 'M10,48L14,44L42,44L46,48L42,52L14,52L10,48z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const E = styled.path.attrs({
  d: 'M8,50L12,54L12,82L8,86L4,82L4,54L8,50z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const F = styled.path.attrs({
  d: 'M48,50L52,54L52,82L48,86L44,82L44,54L48,50z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
export const G = styled.path.attrs({
  d: 'M10,88L14,84L42,84L46,88L42,92L14,92L10,88z',
})<IPath>`
  fill: ${(props) => getColor(props)};
  stroke: ${(props) => getColor(props)};
  stroke-opacity: 1;
`
