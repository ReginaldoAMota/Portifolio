import React from 'react'
import LoginPage from './components/LoginPage/LoginPage'
import Login from './components/LoginPage/LoginPage'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import Chart from './components/Chart/Chart'

function App() {
  const logged = useSelector((state) => state.auth.islogged)

  return <div>{logged ? <Chart /> : <LoginPage />}</div>
}

export default App
