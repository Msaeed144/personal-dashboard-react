import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CryptoPage from './pages/CryptoPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/crypto' element={<CryptoPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
