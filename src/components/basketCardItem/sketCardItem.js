import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const BasketCardItem = ({basketData, onChangeData, onDeleteItem, onIncrPrd}) => {
  return (
    <div className="cardItems">
          <div className='cardItemBasket'>
            <div className='prdData'>
              <div className="pictBasket">
                <img src={require(`../../imgs/${basketData.img}`)} alt="apple" />
              </div>
              <p className="prdNameBasket">{basketData.prdName}</p>
            </div>
            <div className='hisob'>
              <b className='miqdor'>
              {basketData.count} {basketData.unit} 
              </b>
              <b className="costBasket">{basketData.totalPrice} uzs</b>
            </div>
            <div className="counter">
              <button style={{
                '--i': 'lime'
              }} onClick={onChangeData}>+</button>
              <button style={{
                '--i': 'orange'
              }} onClick={onIncrPrd}>-</button>
              <button style={{
                '--i': 'red'
              }} onClick={onDeleteItem}><FaTrashAlt /></button>
            </div>
          </div>
      </div>
  )
}

export default BasketCardItem
