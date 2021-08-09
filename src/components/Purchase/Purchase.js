import React from 'react'
import PurchaseInfo from './PurchaseInfo'
import PurchaseNumbers from './PurchaseNumbers'
import './Purchase.css'
/* la partie du haut à guauch qui affiche les données: N° de commande, date d'expédition, etc */
export default function Purchase({ deliveryInfo, deliverySpan }){
  return(
    <div className="purchase_parent">
{/* deux composants sont créés: un qui affiche le texte: 'N° de commande, Date de commande, Date d’expédition.
le deuxième composant affiche les chiffres correspondants */}    
      <PurchaseInfo deliveryInfo={deliveryInfo} />
      <PurchaseNumbers deliverySpan={deliverySpan} />
    </div>
  )

}
