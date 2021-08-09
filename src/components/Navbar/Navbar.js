import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarList from './NavbarList'
import {GiHamburgerMenu} from 'react-icons/gi';

/* useState(window.innerWidth) permet de declancher la navbar responsive */
export default function Navbar({ navItems }){
/* toggle du menu burger */
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
/* toggle pour afficher les logo si la nav est plier et les cacher si la nav est déplié */
  const [hideImgs, setHideImgs] = useState(true)
  const toggleBurger = () => {
/* onclick sur icone menu declanche deux changement d'état:
  1. pour le menu plié/déplié
  2. pour les images pardessus du menu plié
*/
    setBurgerMenu(!burgerMenu)
    setHideImgs(!hideImgs)
  }
/* détecter le changement de la taille de l'écran */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
/* supprimer eventListener de la fenêtre si on supprime le code que est lié avec */
    return()=>{
      window.removeEventListener('resize', changeWidth)
    }
  },[])
  return(
    <nav className="container_nav">
      {(burgerMenu || screenWidth > 900) && (
        <NavbarList navItems={navItems} />
      )}
  {/* la taill d'écran inférieur à 900 px toggle déclanche l'affichage des logo par-dessus de la nav pliée
  quand la nav est dépliée (className ="mobile_logos") les logo sont cachés grâce au rajout de la classe "hide"  */}
      {(burgerMenu || screenWidth <= 900) && (
        <div className={hideImgs ? "mobile_logos" : "hide"}>
          <div className="text-logo">
            <img src='https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/src/img/logo-text.png' alt="logo Tediber" />
          </div>
          <img src='https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/src/img/shoppingcart.png' alt="logo Tediber" className="shopping-logo"/>
        </div>
      )}
        <GiHamburgerMenu onClick={toggleBurger} className="burger" />
    </nav>
  )
}
