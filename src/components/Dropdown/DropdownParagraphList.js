import React from 'react'
import ImgCheckbox from './ImgCheckbox'
import DropdownParagraph from './DropdownParagraph'
import './Dropdown.css'
/* les deux paragraphs en-dessous des détails de livraison. Ces paragraphs contiennent des détailles
affichées sur le click */
export default function DropdownParagraphList({ track, refund, dropdownItemsImg }){
  return(
    <>
{/* click sur la première phrase Suivi de commande montre les images et les inputs checkbox */}
      <DropdownParagraph text={track} onclick={
        <div className="imgs_checkboxes_section">
          <ImgCheckbox dropdownItemsImg={dropdownItemsImg}/>
        </div>
      } />
{/* la deuxième phrase montre un texte fictif */}      
      <DropdownParagraph text={refund} onclick={
        <p>hello world</p>} />
    </>
  )
}
