import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PanelUser from './pages/PanelUser'
import IndividualCompetition from './layout/IndividualCompetition'
import AllRacers from './pages/AllRacers'
import CreateRacers from './pages/CreateRacers'
import AllCompetitions from './pages/AllCompetitions'
import CreateCompetition from './pages/CreateCompetition'
import PrivateRoute from './components/auth/PrivateRoute'
import EditRacer from './pages/EditRacer'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route path='/panel/user' element={<PanelUser />} />
        <Route path='/panel/competition' element={<IndividualCompetition />} />
        <Route path='/panel/admin/racers/all' element={<AllRacers />} />
        <Route path='/panel/admin/racers' element={<CreateRacers />} />
        <Route path='/panel/admin/racers/:id' element={<EditRacer />} />
        <Route path='/panel/admin/competitions/all' element={<AllCompetitions />} />
        <Route path='/panel/admin/competitions' element={<CreateCompetition />} />
      </Route>


    </Routes>
  )
}

export default App
