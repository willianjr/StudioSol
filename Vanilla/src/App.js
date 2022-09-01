//  APP é responsável pela montagem da aplicação e tem as principais regras de negócios.

import './assets/styles/main.scss'

//Importação dos componentes
import ButtonNewGame from './components/ButtonNewGame'
import ContainerGuess from './components/ContainerGuess'
import Message from './components/Message'
import NumberComponent from './components/Number'
import Api from './services/api'
import { InitialState } from './services/storage'

const App = () => {
  //Criação de Elementos da tela
  const App = document.querySelector('#root')

  const Display = document.createElement('div')
  Display.setAttribute('id', 'Display')

  const DisplayButton = document.createElement('div')
  DisplayButton.setAttribute('id', 'DisplayButton')

  const DisplayMessage = document.createElement('div')
  DisplayMessage.setAttribute('id', 'DisplayMessage')

  const DisplayNumber = document.createElement('div')
  DisplayNumber.setAttribute('id', 'DisplayNumber')

  const FooterGuess = document.createElement('footer')
  FooterGuess.setAttribute('id', 'ContainerGuess')

  const initialRender = () => {
    renderNumber()
    renderMessage()
    renderButtonNewGame()
    renderContainerGuess()
  }
  const initialAppend = () => {
    App.appendChild(Display)
    App.appendChild(FooterGuess)
    Display.appendChild(DisplayMessage)
    Display.appendChild(DisplayNumber)
    Display.appendChild(DisplayButton)
  }
  // Metodo para iniciar uma partida
  const handleNewGame = () => {
    // Ao iniciar uma partida é feito a consulta na API que vai retornar um número para a partida ou error
    Api(`rand?min=${InitialState.minNumber}&max=${InitialState.maxNumber}`).then((data) => {
      const { value, StatusCode } = data
      const valueGame = StatusCode ? StatusCode : value
      const valueDisplay = StatusCode ? StatusCode : 0
      const errorGame = StatusCode ? true : false
      // Atribuição ao estado inicial
      InitialState.number = valueGame
      InitialState.numberDisplay = valueDisplay
      InitialState.isError = errorGame
      InitialState.isGame = !errorGame

      //Renderização dos componentes
      renderNumber(valueDisplay, false, errorGame)
      renderButtonNewGame(errorGame)
      renderContainerGuess(!errorGame)
    })
  }
  // Metodo que faz a chegagem do palpite
  const handleCheckGuess = () => {
    let typeMessage = ''

    // Pega o Valor do Input digitado
    const guessInput = document.querySelector('#Guess')
    const guessValue = guessInput.value
    InitialState.numberDisplay = guessValue
    const number = InitialState.number
    if (number < +guessValue) {
      typeMessage = 'menor'
      InitialState.isSuccess = false
    } else if (number > +guessValue) {
      typeMessage = 'maior'
      InitialState.isSuccess = false
    } else if (number == +guessValue) {
      typeMessage = 'acerto'
      InitialState.isSuccess = true
      InitialState.isGame = false
      InitialState.typeMessage = typeMessage
      initialRender()
    }
    guessInput.value = ''
    renderNumber(guessValue, InitialState.isSuccess, false)
    renderMessage(typeMessage)
  }

  const renderNumber = (number = 0, success = false, error = false) => {
    DisplayNumber.replaceChildren(NumberComponent(number, success, error))
  }
  const renderButtonNewGame = (status = true) => {
    DisplayButton.replaceChildren(ButtonNewGame(InitialState.isGame, handleNewGame))
  }
  const renderMessage = (type) => {
    DisplayMessage.replaceChildren(Message(type))
  }
  const renderContainerGuess = (startGame) => {
    FooterGuess.replaceChildren(ContainerGuess(startGame, handleCheckGuess))
  }
  initialAppend()
  initialRender()

  return App
}
export default App
