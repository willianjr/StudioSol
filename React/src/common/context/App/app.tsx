import { AxiosError } from 'axios'
import React, { createContext, useContext, useState } from 'react'
import api from '../../../config/services/api'
import { IMessagemProps } from '../../components/Mensagem'

import { AppContextProps, AppProviderProps } from './types'

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isGame, setIsGame] = useState(false)
  const [guess, setGuess] = useState<string>('')
  const [numberDisplay, setNumberDisplay] = useState<string>('0')
  const [number, setNumber] = useState<number>(0)
  const [numberOfGuess, setNumberOfGuess] = useState<number>(0)
  const [typeMessage, setTypeMessage] = useState<IMessagemProps>('')

  // useEffect(() => console.log(number), [number])

  const clearGame = () => {
    setTypeMessage('')
    setGuess('')
    setNumberDisplay('0')
    setIsError(false)
    setIsSuccess(false)
  }

  const startGame = () => {
    setIsLoading(true)
    clearGame()
    api
      .get('rand?min=1&max=300')
      .then(({ status, data }) => {
        if (status === 200) {
          setNumber((prev) => data.value)
          setIsGame(true)
        }
      })
      .catch((error: AxiosError) => {
        setNumberDisplay((prev) => error.response?.status.toString() || '0')
        setTypeMessage('error')
        setIsError((prev) => true)
        setIsGame((prev) => false)
      })
      .finally(() => setIsLoading(false))
  }

  const checkGuess = () => {
    setNumberDisplay(guess)
    setNumberOfGuess((prev) => prev + 1)
    setGuess('')
    if (number < +guess) {
      setTypeMessage('menor')
    } else if (number > +guess) {
      setTypeMessage('maior')
    } else if (number == +guess) {
      setTypeMessage('acerto')
      setIsSuccess(true)
      setIsGame(false)
    }
    // console.log(`chutes:${numberOfGuess} - guess:${guess} - number:${number}`)
  }

  return (
    <AppContext.Provider
      value={{
        numberDisplay,
        guess,
        isLoading,
        isGame,
        isError,
        isSuccess,
        typeMessage,
        setIsLoading,
        setGuess,
        startGame,
        checkGuess,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
