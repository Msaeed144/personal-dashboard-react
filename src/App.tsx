import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CryptoPage from './pages/CryptoPage'
import Navbar from './components/Navbar'
import TodoPage from './pages/TodoPage'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/crypto' element={<CryptoPage />}/>
        <Route path='/todo-page' element={<TodoPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
