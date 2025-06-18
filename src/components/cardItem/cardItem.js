import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CardItem = ({item, pict, typeCard, onChangeData}) => {
  const {data, prdName, desc, oldCost, newCost, unit} = item
  return (
        <div className={`card ${typeCard===item.data || typeCard==='all' ? 'screen' : 'hide' }`} data={data}>
            <div className="imgBox"><img src={pict} alt="prd" /></div>
            <h4 className='prdName'>{prdName}</h4>
            <p className='desc'>
              {desc}
            </p>
            <p className='cost'>
                <small>1 {unit}</small>
                <del style={{color:'red'}}>{oldCost} uzs</del>  
                <i style={{color: 'lime'}}>{newCost} uzs</i> 
            </p>
            <button onClick={()=>onChangeData(item)}><ShoppingBasketIcon /></button>
        </div>
    )
}

export default CardItem
