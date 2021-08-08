import React from 'react'
import '../../styles/Purchase.css'

export default function PurchaseInfo({ deliveryInfo }){
  return(
    <div className="delivery_info">
    {deliveryInfo.map((info, index) => {
      return(
        <p key={index}>{info}</p>
      )
    })}
    </div>
  )
}
