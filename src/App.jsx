import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UnknownPage from './pages/UnknownPage'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div className='app'>
      <HeaderShared/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/hotel/:id' element={<HotelInfoPage />}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/reservations' element={<ReservationsPage/>} />
        </Route>
        <Route path='*' element={<UnknownPage/>} />
      </Routes>
    </div>
  )
}



export default App
