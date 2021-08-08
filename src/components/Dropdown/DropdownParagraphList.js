import React from 'react'
import ImgCheckbox from './ImgCheckbox'
import DropdownParagraph from './DropdownParagraph'
import '../../styles/Dropdown.css'

export default function DropdownParagraphList({ track, refund, dropdownItemsImg }){
  return(
    <>
      <DropdownParagraph text={track} onclick={
        <div className="imgs_checkboxes_section">
          <ImgCheckbox dropdownItemsImg={dropdownItemsImg}/>
        </div>
      } />
      <DropdownParagraph text={refund} onclick={
        <p>hello world</p>} />
    </>
  )
}
