import React from 'react'
import DropdownParagraph from './Dropdown/DropdownParagraph'
import Help from '../data/Help.json'

export default function HelpSection(){
  return(
    <div className="help_dropdown">
    {Help.map((text, index) => {
      return(
        <DropdownParagraph onclick={<p>{text.info}</p>} text={text.name} key={index} className="help_paragraph"/>
      )
    })}
    </div>
  )
}
