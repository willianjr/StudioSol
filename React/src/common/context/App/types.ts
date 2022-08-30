import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface AppContextProps {
  isLoading: boolean
  isError: boolean
  isGame: boolean
  isSuccess: boolean
  typeMessage: 'menor' | 'maior' | 'acerto' | 'error' | ''
  guess: string
  numberDisplay: string
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setGuess: Dispatch<SetStateAction<string>>
  startGame: () => void
  checkGuess: () => void
}

export interface AppProviderProps {
  children: ReactNode
}
