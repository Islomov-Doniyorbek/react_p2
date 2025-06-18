import { useState } from 'react';
import './App.css';
import Basket from '../basket/basket';
import CardTable from '../cardTable/cardTable';
import Navbar from '../navbar/navbar';
// import Apple from '../../imgs/apple.jpg'

 

function App() {

  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [basketList, setBasketList] = useState([])
  const [typeCard, setTypeCard] = useState('all')


  const servercha = [
    {
      id: 0,
      data: 'fruits',
      img: 'apple.jpg',
      prdName: 'Olma',
      desc: 'Sersuv, atlas olma',
      oldCost: 14000,
      newCost: 12800,
      unit: 'kg'
    },
    {
      id: 1,
      data: 'fruits',
      img: 'raspberry.jpg',
      prdName: 'Malina',
      desc: 'Mayin va yangi malina',
      oldCost: 54000,
      newCost: 50800,
      unit: 'kg'
    },
    {
      id: 2,
      data: 'veg',
      img: 'carrot.jpg',
      prdName: 'Qizil sabzi',
      desc: 'Qizil sabzi',
      oldCost: 9500,
      newCost: 7550,
      unit: 'kg'
    },
    {
      id: 3,
      data: 'meats',
      img: 'mol-meat.jpg',
      prdName: 'Mol go\'shti',
      desc: 'Mol go\'shti lahm',
      oldCost: 142000,
      newCost: 135900,
      unit: 'kg'
    },
    {
      id: 4,
      data: 'meats',
      img: 'qoy-meat.jpg',
      prdName: 'Qo\'y go\'shti',
      desc: 'Qo\'y go\'shti son',
      oldCost: 134000,
      newCost: 130000,
      unit: 'kg'
    },
    {
      id: 5,
      data: 'peas',
      img: 'rice-lazer.jpg',
      prdName: 'Guruch',
      desc: 'Xorazm lazer guruchi',
      oldCost: 32000,
      newCost: 28000,
      unit: 'kg'
    },
    {
      id: 6,
      data: 'peas',
      img: 'grechka.jpg',
      prdName: 'Grechka',
      desc: 'Grechka',
      oldCost: 11200,
      newCost: 7900,
      unit: 'kg'
    },
    {
      id: 7,
      data: 'meats',
      img: 'tovuq-meat.jpg',
      prdName: 'Tovuq go\'shti',
      desc: 'Butun tovuq',
      oldCost: 60000,
      newCost: 55200,
      unit: 'dona'
    },
    {
      id: 8,
      data: 'fruits',
      img: 'pomegranate.jpg',
      prdName: 'Anor',
      desc: 'Qora Anor',
      oldCost: 31000,
      newCost: 27600,
      unit: 'kg'
    },
    {
      id: 9,
      data: 'fruits',
      img: 'pear.jpg',
      prdName: 'Nok',
      desc: 'Nok Dyushes',
      oldCost: 38000,
      newCost: 32400,
      unit: 'kg'
    },
    {
      id: 10,
      data: 'veg',
      img: 'onion.jpg',
      prdName: 'Piyoz',
      desc: 'piyoz',
      oldCost: 8000,
      newCost: 5500,
      unit: 'kg'
    },
    {
      id: 11,
      data: 'veg',
      img: 'potato.jpg',
      prdName: 'Kartoshka',
      desc: 'Pokiston kartoshkasi',
      oldCost: 8500,
      newCost: 7200,
      unit: 'kg'
    },
    {
      id: 11,
      data: 'peas',
      img: 'mosh.jpg',
      prdName: 'Mosh',
      desc: 'Mosh',
      oldCost: 16000,
      newCost: 14400,
      unit: 'kg'
    },
    {
      id: 12,
      data: 'peas',
      img: 'rice-alanga.jpg',
      prdName: 'Guruch',
      desc: 'Xorazm alanga guruchi',
      oldCost: 26000,
      newCost: 24400,
      unit: 'kg'
    },
    {
      id: 13,
      data: 'poliz',
      img: 'watermelon.jpg',
      prdName: 'Tarvuz',
      desc: 'Tarvuz',
      oldCost: 4000,
      newCost: 2300,
      unit: 'kg'
    },
  ]

  const onChangaData = (a) => {
    setBasketList(prevList => {
      const asd = prevList.find(i => i.id === a.id);

      if(asd){
        return (
          prevList.map(i =>
          i.id === a.id
            ? {
                ...i,
                count: i.count + 1,
                totalPrice: i.newCost * (i.count + 1)
              }
            : i)
        )
      }else{
        return [
        ...prevList,
        {
          ...a,
          count: 1,
          totalPrice : a.newCost       // umumiy narx
        }
      ];
      }

    })   
    
  }
  console.log(basketList);

  const onIncrementPrd = (A)=> {

    const newArr = [...basketList];
    console.log(A);
    console.log(newArr);
    
      newArr.forEach(item=>{
        if (item.id === A){
          if ( item.count > 1){
            item.count--;
            item.totalPrice = item.count * item.newCost
            setBasketList(newArr)
          }else{
            setBasketList(newArr.filter(item => item.id !== A))
          }
          
        } 
      })
      // setBasketList(prevList=>{
      //   const refreshList = prevList.map(item=>{
      //     if(item.id === A){
      //       return {
      //         ...item,
      //         count: item.count--,
      //         totalPrice: item.count * item.newCost
      //       }
      //     }
      //     return item
      //   }).filter(item=> item.count>0)

      //   return refreshList
      // })

  }
  const onDeleteItem = (A) => {
    console.log(A);
    
    setBasketList(prevList=>{
      return prevList.filter(item => item.id !== A.id)
    })
  }
  
  const filteringCard = (type) => {
    console.log(type);
    
    setTypeCard(type)
  }
  console.log(typeCard);
  
  

  
  return (
    <>
      <Navbar onCartClick={() => setIsBasketOpen(true)} basketData={basketList} filteringCard={filteringCard}/>
      <CardTable db={servercha} onChangeData={onChangaData} typeCard={typeCard}/>
      <Basket 
      isBasket={isBasketOpen} 
      onChangeData={onChangaData} 
      onIncrPrd={onIncrementPrd} 
      onDeleteItem={onDeleteItem} 
      onClose={()=> setIsBasketOpen(false)} 
      basketData={basketList} 
      />
    </>
  );
}

export default App;
