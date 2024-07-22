
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Payment from './components/Payment'
import Details from './components/Details'
import Reviews from './Reviews';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import OrderPlacedPage from './components/OrderPlaced';

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  // console.log('222', total)
  console.log(cartData,'cartData');
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>} />
      <Route path="/details" element={<Details setCartData={setCartData} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<OrderPlacedPage total={total} />} />
      <Route path="/products" element={<Products />} />

    </Routes>
    </>
  )
}

export default App