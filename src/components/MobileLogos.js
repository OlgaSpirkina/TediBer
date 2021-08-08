import React from 'react'
export default function MobileLogos({ prop }){
  return (
    <div className={prop}>
      <div className="text-logo">
        <img src='https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/logo-text.png' alt="logo Tediber" />
      </div>
      <img src='https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/shoppingcart.png' alt="logo Tediber" className="shopping-logo"/>
    </div>
  )
}
