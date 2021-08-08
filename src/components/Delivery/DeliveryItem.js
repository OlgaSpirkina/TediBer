import React from 'react'
import DeliveryInfo from '../../data/DeliveryInfo.json'

export default function DeliveryItem(){
  return(
    <>
    {DeliveryInfo.map((information, index) => {
      return(
        <div key={index} className="element_delivery">
          <h3>{information.name.toUpperCase()}</h3>
          <div>
            {information.info.map(elem => {
              return(
                <p>{elem}</p>
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
