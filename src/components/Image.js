import React from 'react'
import '../styles/Image.css'

export default function Image({ navItem, imgId }){
  return (
    <>
      <img className="nav_img" id={imgId} src={navItem} alt="tediber logo"/>
    </>
  )
}
