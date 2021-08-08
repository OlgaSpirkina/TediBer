import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import '../../styles/Navbar.css'
import Image from '../Image'

export default function NavbarList({ navItems, navItem, imgId, linkId }){
  const [mobileScreenWidth, setMobileScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const changeMobileScreenWidth = () => {
      setMobileScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeMobileScreenWidth)

    return()=>{
      window.removeEventListener('resize', changeMobileScreenWidth)
    }
  },[])
  return(
    <div className="list">
    {mobileScreenWidth > 500 && (
      navItems.map((item, index) => {
        if(item.includes('https')){
          return (<Image key={index} navItem={item} imgId={'img'+index} />)
        }
      return( <NavbarItem key={index} navItem={item} linkId={'link'+index} />)
      })
    )}
    {mobileScreenWidth < 500 && (
      navItems.map((item, index) => {
      if(!item.includes('https')){
        return ( <NavbarItem key={index} navItem={item} linkId={'link'+index} />)
        }
      })
    )}
    </div>
  )
}



/*
import NavbarItem from './NavbarItem'
import '../../styles/Navbar.css'
import Image from '../Image'

export default function NavbarList({ navItems, navItem, imgId, linkId }){
  return(

  )
}

*/
