// BOTÃO DE NOVA PARTIDA
// status: renderização condicional
// startGame: callback para função de inicialização da partida
export default (status, startGame) => {
  //Renderização condicional do botão
  if (status) return document.createElement('i')

  //Criação de um elemento button
  const NewButton = document.createElement('button')
  const createSVGElement = (qn) => document.createElementNS('http://www.w3.org/2000/svg', qn)
  const IconButton = createSVGElement('svg')
  const IconPath = createSVGElement('path')

  //Criação de um elemento svg - icone de reload
  IconButton.setAttribute('viewBox', '0 0 20 20')
  IconButton.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  IconPath.setAttribute('d', 'M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z')
  IconButton.appendChild(IconPath)

  NewButton.setAttribute('id', 'ButtonNewGame')
  NewButton.textContent = `Nova Partida`
  NewButton.appendChild(IconButton)
  //Adição de evento de click para o botão
  NewButton.addEventListener('click', (event) => {
    startGame()
  })

  return NewButton
}
