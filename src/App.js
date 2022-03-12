import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './components/LoginPage/LoginPage'
import LogonPage from './components/LogonPage/LogonPage'
import Chart from './components/Chart/Chart'



function App() {
  return (
    <Routes>
        <Route path='' element={<LoginPage />} />
        <Route path='/Logon' element={<LogonPage />} />
        <Route path='/Chart' element={<Chart />} />
    </Routes>
  )

}


export default App
