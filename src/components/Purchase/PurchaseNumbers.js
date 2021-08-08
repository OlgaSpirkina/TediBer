import React from 'react'
import '../../styles/Purchase.css'
export default function PurchaseNumbers({ deliverySpan }){
  return(
    <div className="delivery_span">
    {deliverySpan.map((elem, index) => {
      return(
        <p key={index}>{elem}</p>
      )
    })}
    </div>
  )
}
