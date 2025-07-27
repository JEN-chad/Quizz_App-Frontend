import './App.css'
import { Home } from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Quizz } from './pages/Quizz'
import { Result } from './pages/Result'

function App() {
 

  return (
    <>
    <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/auth/login" element={<Login />}></Route>
       <Route path="/quizz" element={<Quizz />}></Route>
       <Route path="/result" element={<Result />}></Route>
    </Routes>
  
    </>
  )
}

export default App
