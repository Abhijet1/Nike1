
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Payment from './components/Payment'
import Details from './components/Details'

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    </>
  )
}

export default App