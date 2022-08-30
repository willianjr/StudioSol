import React from 'react'
import { IoReloadSharp } from 'react-icons/io5'
import { config } from '../../../config/utils'
import { Message, Number } from '../../components'
import { useAppContext } from '../../context/App'

import { ButtonNewGame, ContainerGuess, ContainerPage, Display, Guess, TitleGame } from './styles'

export const HomePage: React.FC = () => {
  const appContext = useAppContext()
  const { numberDisplay, guess, isGame, isError, isSuccess, typeMessage, setGuess, startGame, checkGuess } = appContext

  return (
    <ContainerPage>
      <TitleGame>Qual é o seu número?</TitleGame>
      <Display>
        <Message type={typeMessage} />
        <Number number={numberDisplay} error={isError} success={isSuccess} />
        {!isGame && (
          <ButtonNewGame type="button" onClick={startGame}>
            <IoReloadSharp />
            Nova Partida
          </ButtonNewGame>
        )}
      </Display>
      <ContainerGuess>
        <Guess
          min={config.minNumber}
          max={config.maxNumber}
          value={guess}
          onChange={(e) =>
            setGuess(
              +e.target.value < config.minNumber
                ? config.minNumber.toString()
                : +e.target.value > config.maxNumber
                ? config.maxNumber.toString()
                : e.target.value,
            )
          }
          disabled={!isGame}
        />
        <button disabled={!isGame} type="button" onClick={() => checkGuess()}>
          Enviar
        </button>
      </ContainerGuess>
    </ContainerPage>
  )
}
