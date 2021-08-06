import React, { Component } from 'react'
import Purchases from '../data/Purchases.json'
class Shopping extends Component {
  render() {
    return(
      <div>
        {Purchases.map((article, index) =>{
          return (
            <div key={index}>
              <p >{article.title}</p>
              <img src={article.image} alt={article.title}/>
            </div>
          )
        })}
      </div>
    )
  }

}
export default Shopping
