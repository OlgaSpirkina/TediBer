import React from 'react'
import '../styles/Banner.css'
/* les sections-bannières affichant une phrase comme: suivi de commande, informations sur la livraison, informations sur le paement, etc. */
export default function Banner( {prop} ){
  return(
    <div className="banner-container">
      <h2><span>{prop}</span></h2>
      <img className="zigzag-line" src="https://raw.githubusercontent.com/OlgaSpirkina/TediBer/b237b50975b848e8da759a48009c1f1b512c9787/public/zigzag.svg" alt="zigzag line" />
    </div>
  )
}
