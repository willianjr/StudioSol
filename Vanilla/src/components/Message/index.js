// Componente para exibir a mensagem após o palpite
//  type: tipo de mensagem a exibir
export default (type = '') => {
  const Message = document.createElement('span')
  Message.setAttribute('id', 'Message')
  Message.classList.add(type ? type : 'x')

  const msgReturn = [
    { type: 'menor', msg: 'É Menor' },
    { type: 'maior', msg: 'É Maior' },
    { type: 'success', msg: 'Você acertou!!!!' },
    { type: 'error', msg: 'ERRO' },
    { type: '', msg: '' },
  ]

  Message.textContent = msgReturn.filter((msg) => msg.type === type)[0]?.msg || ''

  return Message
}
