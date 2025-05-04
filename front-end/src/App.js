import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './LoginPage.jsx'
import RegistrationPage from './RegistrationPage.jsx'

export const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
