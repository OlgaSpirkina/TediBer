import React, { useState } from 'react'
import{FaChevronDown} from 'react-icons/fa';

export default function DropdownParagraph({ onclick, text }){
  const [display, setDisplay] = useState(false);
  return(
    <>
      <p className="dropdown_paragraph">
        {text}
        <FaChevronDown onClick={()=>setDisplay(!display)} className="dropdownIcon icon_in_paragraph"/>
        {display ? <>{onclick}</> : null}
      </p>
    </>
  )
}
