import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Footer from './components/Footer/Footer'
import {_disableReactDevTools, disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV==='production') disableReactDevTools();

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
    
  )
}

export default App
