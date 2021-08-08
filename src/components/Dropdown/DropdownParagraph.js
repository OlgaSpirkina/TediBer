import React, { useState } from 'react'
import ChevronChange from './ChevronChange';

export default function DropdownParagraph({ onclick, text }){
  const [display, setDisplay] = useState(false);
  return(
    <>
      <p className="paragraph_dropdown">
        {text}
        <span onClick={()=>setDisplay(!display)} >
          <ChevronChange className="dropdownIcon"/>
        </span>
        {display ? <>{onclick}</> : null}
      </p>
    </>
  )
}
