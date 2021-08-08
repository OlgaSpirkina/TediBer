import React, { useState } from 'react'
import{FaChevronDown} from 'react-icons/fa';

export default function ChevronChange(){
  const [toggle, setToggle] = useState(true)
  return(
    <span onClick={()=>setToggle(!toggle)}>
      <FaChevronDown  className=
        {toggle ? "icon_in_paragraph" : "icon_in_paragraph turn_around"}
      />
    </span>
  )
}
