import './App.css'
import MainPage from './Components/MainPage'
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';

function App() {


  return (
    <>
      <Routes >
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Registration />}></Route>
      </Routes>
    </>
  )
}

export default App
