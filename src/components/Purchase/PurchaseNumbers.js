import React from 'react'
import './Purchase.css'
/* les données: 405560003, 1 mai 2019, 3 mai 2019 */
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
