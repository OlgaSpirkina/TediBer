import React from 'react'
import ShoppingItem from './ShoppingItem'
import '../styles/ShoppingList.css'
export default function ShoppingList(){
  return(
    <div className="shopping-section">
      <p className="article-quantity">ARTICLES (4)</p>
      <ShoppingItem />
    </div>
  )
}
