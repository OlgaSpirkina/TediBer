import React from 'react';
import DropdownParagraphList from './DropdownParagraphList'
import Purchase from '../Purchase/Purchase'
import '../../styles/Dropdown.css'

const DropdownSection = ({ deliveryInfo, deliverySpan, dropdownItemsImg, track, refund }) =>{
  return(
    <div className="delivery_section">
      <Purchase deliveryInfo={deliveryInfo} deliverySpan={deliverySpan} />
      <DropdownParagraphList  dropdownItemsImg={dropdownItemsImg} track={track} refund={refund} />
    </div>
  )
}

export default DropdownSection;
