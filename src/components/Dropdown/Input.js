import React, { useState } from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import './Input.css'
/* les checkbox en dessous des images Suivre commande */
export default function Input (){
/* créer l'état pour afficher checkbox checked ou unchecked  */  
  const [outlineCheck, setOutlineCheck] = useState(false);
  return(
    <label className="switch">
      <input className="input_in_dropdown"  type="checkbox" onChange={()=>setOutlineCheck(!outlineCheck)}/>
      <span className="styled_checkbox">
{/* checkbox-checked styliser avec une icone  */}
        {outlineCheck ? <AiOutlineCheck className="outline_check_icon" /> : null}
      </span>
    </label>
  )
}
