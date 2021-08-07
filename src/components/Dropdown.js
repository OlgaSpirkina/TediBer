import React, { useState } from 'react';
import{FaChevronDown} from 'react-icons/fa';
import '../styles/Navbar.css'

const Dropdown = () =>{
  const data = [
    {
      
    }
  ]
  const [content, setContent] = useState();
  return(
    <><p>suivi de commande</p>
      {data.map(elem => {
        return(
          <FaChevronDown
            key={elem}
            onClick={()=>setContent(elem)}
            className="dropdownIcon"
          />
        )
      })
      }
      <h1>{content}</h1>
    </>
  )
}






export default Dropdown;
