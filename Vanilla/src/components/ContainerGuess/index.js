//Componete ContainerGuess
// Renderiza o footer com o campo de palpite e botão para enviar
// startGame: status condicional de disable para o input e button
// checkGuess: callback para função para verificar o palpite do número
import { InitialState } from '../../services/storage'

export default (startGame = false, checkGuess) => {
  const Pai = document.createElement('div')
  Pai.setAttribute('id', 'ContainerGuess')
  const Input = document.createElement('input')
  Input.setAttribute('type', 'number')
  Input.setAttribute('id', 'Guess')
  Input.setAttribute('min', InitialState.minNumber)
  Input.setAttribute('max', InitialState.maxNumber)
  Input.setAttribute('value', '')
  Input.setAttribute('placeHolder', 'Digite seu palpite')
  const Button = document.createElement('button')
  Button.setAttribute('type', 'button')
  Button.textContent = 'Enviar'

  //Adiciono o evento click do botão de checar o palpite
  Button.addEventListener('click', (event) => {
    checkGuess()
  })

  //Adiciona eventos ao insetir um valor no input para limitar o valor
  const limiterAndReturnMaxValue = (value) => Math.min(parseInt(InitialState.maxNumber), parseInt(value) || 0)
  Input.addEventListener('keyup', (e) => (e.target.value = limiterAndReturnMaxValue(e.target.value)))
  Input.addEventListener('change', (e) => (e.target.value = limiterAndReturnMaxValue(e.target.value)))
  Input.addEventListener('input', (e) => (e.target.value = limiterAndReturnMaxValue(e.target.value)))
  Input.addEventListener('paste', (e) => (e.target.value = limiterAndReturnMaxValue(e.target.value)))

  //Caso game não tenha começado - deixa o input e button de palpite desabilitado
  if (!startGame) Input.setAttribute('disabled', 'disabled')
  if (!startGame) Button.setAttribute('disabled', 'disabled')

  Pai.appendChild(Input)
  Pai.appendChild(Button)

  return Pai
}
