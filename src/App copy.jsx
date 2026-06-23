import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/loginpage/Login';
import SignUp from './component/signuppage/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;