import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { store } from './store'
import { GlobalCss } from './styles'

import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
