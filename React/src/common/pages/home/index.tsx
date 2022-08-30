import React from 'react'
import { IoReloadSharp } from 'react-icons/io5'
import { config } from '../../../config/utils'
import { Mensagem, Number } from '../../components'
import { useAppContext } from '../../context/App/app'

import { ButtonNewGame, ContainerPage, ContainerPalpite, Display, Palpite as Guess, TituloGame } from './styles'

export const HomePage: React.FC = () => {
  const appContext = useAppContext()
  const { numberDisplay, guess, isGame, isError, isSuccess, typeMessage, setGuess, startGame, checkGuess } = appContext

  return (
    <ContainerPage>
      <TituloGame>Qual é o seu número?</TituloGame>
      <Display>
        <Mensagem type={typeMessage} />
        <Number number={numberDisplay} error={isError} success={isSuccess} />
        {!isGame && (
          <ButtonNewGame type="button" onClick={startGame}>
            <IoReloadSharp />
            Nova Partida
          </ButtonNewGame>
        )}
      </Display>
      <ContainerPalpite>
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
      </ContainerPalpite>
    </ContainerPage>
  )
}
