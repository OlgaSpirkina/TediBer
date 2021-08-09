import React from 'react'
import DeliveryItem from './DeliveryItem'
import './Delivery.css'
/* les 4 divs sont rassemblées pour être afficher sur App.js */
export default function DeliveryItemList(){
  return(
    <div className="delivery_info_section article-container">
      <DeliveryItem />
    </div>
  )
}
