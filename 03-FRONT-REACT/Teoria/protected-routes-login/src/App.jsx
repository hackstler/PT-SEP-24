import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Login } from './pages/LoginPage'

const Home = () => {
  return <div>Home</div>
}


function App() {


  return (
    <Routes>
      <Route path='/' />
      <Route path='/login' element={<Login />} />
      <Route path='/protected' element={
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      } />
    </Routes >
  )
}

export default App
