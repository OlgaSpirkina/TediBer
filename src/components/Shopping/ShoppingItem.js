import React, { Component } from 'react'
import Purchases from '../../data/Purchases.json'
import './ShoppingList.css'
class ShoppingItem extends Component {
  render() {
    return(
      <div>
{/* Les achats dans le panier: la couette, oreiller et le lit. Les info sur ces achats sont stoquer en
  fichier JSON Purchases. On affiche chaque achat comme une div contenant l'image et le text descriptif */}      
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
