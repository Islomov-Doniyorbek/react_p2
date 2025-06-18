import React from 'react'
import BasketCardItem from '../basketCardItem/sketCardItem'


const Basket = ({isBasket, onClose, basketData, onChangeData, onDeleteItem, onIncrPrd}) => {
  let shot=0
  for (let i = 0; i < basketData.length; i++) {
    shot+=basketData[i].totalPrice
  }
  
  return (
    <div className={`basketBar ${isBasket ? 'open' : ''}`}>
      <p className='close'>
        <i className="fa fa-close" onClick={onClose}></i>
      </p>
      <div className='cardsBasket'>
        {basketData.map(item=>(
        <BasketCardItem key={item.id} basketData={item} onChangeData={()=>onChangeData(item)} onIncrPrd={()=>onIncrPrd(item.id)} onDeleteItem={()=>onDeleteItem(item)}/>
      ))}
      </div>
      
      <div className="shot">
        <span>Count: <b>{basketData.length}</b></span> <br/>
        <span>Sum: <b>{shot}</b> uzs</span>
      </div>
    </div>
  )
}

export default Basket
