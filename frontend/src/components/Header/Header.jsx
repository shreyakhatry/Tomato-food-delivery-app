import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  // const navigate = useNavigate();

  //   const handleViewMenuClick = () => {
  //       navigate('');
  //   };
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <button ><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  )
}

export default Header
