
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Payment from './components/Payment'
import Details from './components/Details'
import Reviews from './Reviews';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/details" element={<Details />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>
    </>
  )
}

export default App