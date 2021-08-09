import React from 'react'
import DeliveryInfo from '../../data/DeliveryInfo.json'
/* Section info sur la livraison avec l'adresse, nom, etc. */
export default function DeliveryItem(){
  return(
    <>
{/* toutes les infos sont stoqueés en fichier JSON et affichées en tant qu'une div contenante le heading et le paragraph */}    
    {DeliveryInfo.map((information, index) => {
      return(
        <div key={index} className="element_delivery">
          <h3>{information.name.toUpperCase()}</h3>
          <div>
            {information.info.map((elem, index) => {
              return(
                <p key={index}>{elem}</p>
              )
            })}
          </div>
        </div>
      )
    })
    }
    </>

  )
}
