import React from 'react'
import CardItem from '../cardItem/cardItem'


const CardTable = ({db, onChangeData, typeCard}) => {
  // console.log(db);
  return (
    <div className='wrapper'>
      <div className='cards'>
            {
              db.map(item=> (
                <CardItem key={item.id} item={item} pict={require(`../../imgs/${item.img}`)} typeCard={typeCard} onChangeData={()=>onChangeData(item)}/>
              ))
            }
      </div>
    </div>
  )
}

export default CardTable
