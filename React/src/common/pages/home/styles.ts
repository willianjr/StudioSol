import styled from 'styled-components'

export const ContainerPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 50vw;
  height: calc(100vh - 2rem);
  margin-top: 1rem;

  border-radius: 0.5rem;
  padding: 1rem;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`

export const TituloGame = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem 2rem;
  height: 1.5rem;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;

  text-transform: uppercase;
  color: var(--orange);
  border-bottom: 1px solid #ccc;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`
export const Display = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ButtonNewGame = styled.button`
  background: linear-gradient(180deg, #434854 0%, #9e9e9e 100%);
  border-radius: 0.25rem;
  padding: 1rem 0.5rem;
  color: var(--white);
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  > svg {
    margin-right: 0.5rem;
  }
  cursor: pointer;
`
export const ContainerPalpite = styled.footer`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 2rem 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  > button {
    background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
    border-radius: 4px;
    color: var(--white);
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    z-index: 999;
    :disabled {
      background: #dddddd;
    }
  }
`
export const Palpite = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite o palpite',
  maxLength: 3,
  max: 999,
  min: 0,
})`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 1rem;
  flex: 1;
  :focus {
    border: 1px solid var(--orange);
    outline: none;
  }
  :disabled {
    background: #f5f5f5;
    border: 1px solid #cfcfcf;
  }
`
