import React from 'react'
import Input from './Input'
import './Dropdown.css'
/* les imgs et les checkbox qui s'affiche quand on click sur Suivi de commande */
export default function ImgCheckbox({ dropdownItemsImg }){
  return(
    <>
    {dropdownItemsImg.map((img, index) =>{
      return(
        <span key={index} className="dropdown_section_parent">
          <div className="dropdown_img_parent"><img src={img} alt="icon de livraison" /></div>
          <Input index={index}/>
        </span>
      )
    })
    }
    </>
  )
}
