import React, { useState } from 'react'
import{FaChevronDown} from 'react-icons/fa';
// icone du chevron up/down pour afficher le contenu des paragraphs.
export default function ChevronChange(){
  const [toggle, setToggle] = useState(true)
  return(
    <span onClick={()=>setToggle(!toggle)}>
    {/* au changement d'état et on rajoute ou summpime la class qui fait tourner le chevron à 180° */}
      <FaChevronDown  className=
        {toggle ? "icon_in_paragraph" : "icon_in_paragraph turn_around"}
      />
    </span>
  )
}
