import React from 'react'
import '../styles/Dropdown.css'

export default function Input ({ index }){
  if(index <= 1){
    return(
      <>
        <input className="input_in_dropdown"  type="checkbox" checked="checked" />
      </>
    )
  }return(
    <>
      <input className="input_in_dropdown" type="checkbox" />
    </>
  )
}
