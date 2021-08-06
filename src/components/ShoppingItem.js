import React, { Component } from 'react'
import Purchases from '../data/Purchases.json'
import '../styles/ShoppingList.css'
class ShoppingItem extends Component {
  render() {
    return(
      <div>
        {Purchases.map((article, index) =>{
          return (
            <div key={index} className="article-container">
              <img src={article.image} alt={article.title}/>
              <div className="article-text-container">
                <p>{article.title}</p>
                <p>{article.price}</p>
                <p className="font-light">{article.details[0].toLowerCase()}</p>
                <p className="font-light">{article.details[1]}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}
export default ShoppingItem
