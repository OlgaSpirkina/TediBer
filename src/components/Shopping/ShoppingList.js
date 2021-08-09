import React from 'react'
import ShoppingItem from './ShoppingItem'
import './ShoppingList.css'
export default function ShoppingList(){
/* affichage de la séction des achats c'est le composant ShoppingList qui va intégrer App Composant */
  return(
    <div className="shopping-section">
      <p className="article-quantity">ARTICLES (4)</p>
      <ShoppingItem />
    </div>
  )
}
