import React from 'react'
import './Image.css'
// les logos de la navbar
export default function Image({ navItem, imgId }){
  return (
    <>
      <img className="nav_img" id={imgId} src={navItem} alt="tediber logo"/>
    </>
  )
}
