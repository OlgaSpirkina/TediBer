import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'
import NavbarList from './NavbarList'
import MobileLogos from '../MobileLogos'
import {GiHamburgerMenu} from 'react-icons/gi';
export default function Navbar({ navItems }){
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleBurger = () => {
    setBurgerMenu(!burgerMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return()=>{
      window.removeEventListener('resize', changeWidth)
    }
  },[])
  return(
    <nav className="container_nav">
      {(burgerMenu || screenWidth > 500) && (
        <NavbarList navItems={navItems} />
      )}
      {(burgerMenu || screenWidth < 500) && (
        <MobileLogos />
      )}
        <GiHamburgerMenu onClick={toggleBurger} className="burger" />
    </nav>
  )
}
