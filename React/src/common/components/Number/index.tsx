import React from 'react'

import { A, B, C, Container, D, DisplayNumber, E, F, G } from './styles'

interface INumber {
  number: string
  error?: boolean
  success?: boolean
}

export const Number: React.FC<INumber> = ({ number = '0', error, success }) => {
  const digitPattern = [
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  ]

  const getActive = (position: number, number: number) => (digitPattern[position][number] === 1 ? true : false)
  return (
    <DisplayNumber>
      {number.split('').map((n, index) => (
        <Container height="100%" viewBox="0 0 100 100" preserveAspectRatio="true" key={index}>
          <g transform="translate(25,0)">
            <A active={getActive(0, parseInt(n))} error={error} success={success} />
            <B active={getActive(1, parseInt(n))} error={error} success={success} />
            <C active={getActive(2, parseInt(n))} error={error} success={success} />
            <D active={getActive(3, parseInt(n))} error={error} success={success} />
            <E active={getActive(4, parseInt(n))} error={error} success={success} />
            <F active={getActive(5, parseInt(n))} error={error} success={success} />
            <G active={getActive(6, parseInt(n))} error={error} success={success} />
          </g>
        </Container>
      ))}
    </DisplayNumber>
  )
}
