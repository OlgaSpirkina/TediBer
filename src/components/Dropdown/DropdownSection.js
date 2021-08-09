import React from 'react';
import DropdownParagraphList from './DropdownParagraphList'
import Purchase from '../Purchase/Purchase'
import './Dropdown.css'

/* le parent de la section de livraison qui récupère beaucoup de donner sur App.js pour les faire passer
aux composants enfants */
const DropdownSection = ({ deliveryInfo, deliverySpan, dropdownItemsImg, track, refund }) =>{
  return(
    <div className="delivery_section">
      <Purchase deliveryInfo={deliveryInfo} deliverySpan={deliverySpan} />
      <DropdownParagraphList  dropdownItemsImg={dropdownItemsImg} track={track} refund={refund} />
    </div>
  )
}

export default DropdownSection;
