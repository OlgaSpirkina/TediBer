import React, { useState } from 'react'
import ChevronChange from './ChevronChange';
// chaque phrase de la section Détails de la livraison et sa construction individuelle
export default function DropdownParagraph({ onclick, text }){
/* en paramètres sont passés le texte de la phrase et le contenu qu'elle affichera sur click */
  const [display, setDisplay] = useState(false);
  return(
    <>
      <div className="paragraph_dropdown">
        {text}
        <span onClick={()=>setDisplay(!display)} >
        {/* au click sur l'icon le contenu sera afficher ou cacher (toggle) */}
          <ChevronChange className="dropdownIcon"/>
        </span>
        {display ? <>{onclick}</> : null}
      </div>
    </>
  )
}
