import React, { useState } from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import '../styles/Input.css'

export default function Input ({ index }){
  const [outlineCheck, setOutlineCheck] = useState(false);
  return(
    <label className="switch">
      <input className="input_in_dropdown"  type="checkbox" onChange={()=>setOutlineCheck(!outlineCheck)}/>
      <span className="styled_checkbox">
        {outlineCheck ? <AiOutlineCheck className="outline_check_icon" /> : null}
      </span>
    </label>
  )
}
