import React from 'react'
import PurchaseInfo from './PurchaseInfo'
import PurchaseNumbers from './PurchaseNumbers'
import '../../styles/Purchase.css'

export default function Purchase({ deliveryInfo, deliverySpan }){
  return(
    <div className="purchase_parent">
      <PurchaseInfo deliveryInfo={deliveryInfo} />
      <PurchaseNumbers deliverySpan={deliverySpan} />
    </div>
  )

}
