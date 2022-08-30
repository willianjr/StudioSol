import { GlobalStyle } from '../common/assets/styles/global'
import { AppProvider } from '../common/context/App/app'
import { HomePage } from '../common/pages/home'

function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <HomePage />
      </AppProvider>
    </>
  )
}

export default App
