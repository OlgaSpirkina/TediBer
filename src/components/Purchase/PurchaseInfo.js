import React from 'react'
import './Purchase.css'
/* les données: N° de commande, Date de commande, Date d’expédition */
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
