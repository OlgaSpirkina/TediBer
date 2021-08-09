import React from 'react'
import TotalOrder from '../data/TotalOrder.json'
// section-bannière sur le total d'achat
export default function TotalPrice(){
  return(
    <>
      {TotalOrder.map((total, index) => {
        return(
          <p className={total.name.toLowerCase()} key={index}>{total.name}<span>{total.price}</span></p>
        )
      })}
    </>
  )
}
