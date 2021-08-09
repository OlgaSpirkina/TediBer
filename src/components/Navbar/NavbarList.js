import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import './Navbar.css'
import Image from './Image'

export default function NavbarList({ navItems, navItem, imgId, linkId }){
  /* détecter le changement de la taille d'écran */
  const [mobileScreenWidth, setMobileScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const changeMobileScreenWidth = () => {
      setMobileScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeMobileScreenWidth)
/* si la fonction sera supprimée du code on enlève EventListener de la fenêtre */
    return()=>{
      window.removeEventListener('resize', changeMobileScreenWidth)
    }
  },[]) // le tableau vide [] veux dire qu'on appelle la fonction une fois et il n'y aura pas de changement

  return(
    <div className="list">
    {/* le poins de changemet 900px le menu burger est déclanché quand la taille
      est inférieure à 900px */}
    {mobileScreenWidth > 900 && (
      navItems.map((item, index) => {
        return(
          <>
    {/* le rendu des element de la nav soit en tant que composant Image soit NavbarItem */}
          {item.includes('https') ? <Image key={index} navItem={item} imgId={'img'+index} />
          : <NavbarItem key={index} navItem={item} linkId={'link'+index} /> }
          </>
        )
      })
    )}
    {/* Version mobile: la navbar ne contien plus d'image dans le menu, elle contien NavbarItem lien
    les img sont affichées par-dessus quand la nav est repliée. J'affiche si ce n'est pas une img  */}
    {mobileScreenWidth <= 900 && (
      navItems.map((item, index) => {
      if(!item.includes('https')){
        return ( <NavbarItem key={index} navItem={item} linkId={'link'+index} />)
        }
      })
    )}
    </div>
  )
}
