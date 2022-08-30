import React from 'react'

import { Container } from './styles'

export type IMessagemProps = 'menor' | 'maior' | 'acerto' | 'error' | ''

interface PropsMessage {
  type: IMessagemProps
}

export const Mensagem: React.FC<PropsMessage> = ({ type }) => {
  const msgReturn = [
    { type: 'menor', msg: 'É Menor' },
    { type: 'maior', msg: 'É Maior' },
    { type: 'acerto', msg: 'Você acertou!!!!' },
    { type: 'error', msg: 'ERRO' },
  ]
  return <Container type={type}>{type && msgReturn.filter((msg) => msg.type === type)[0].msg}</Container>
}
