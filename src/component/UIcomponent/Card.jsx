import React from 'react'
import  "./card.css"
import AddButton from './AddButton'
const Card = ({name,price,type,img,id,count}) => {
  return (
    <>
    <div className='food_card'>
   {/* <div className='card_image' style={{backgroundImage:"url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg)"}}>  */}
   <img alt={name} src={img} width={"100%"} height={"74%"}  className='card_image' />
   
   {/* </div> */}
    <div className='food_name_div'>
        <img alt='icon' src={`${type==="veg"?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1lB2lGMCyZYmGQ5YsmFrzLbxh0xq-h-GTi_kt8oivw&usqp=CAU&ec=48665698':"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"}`} height={"20px"} width={"20px"}></img>
        <div style={{marginLeft:"5px"}}>{name}</div>
    </div>
    <div className='food_name_div price_div'>
        <div>₹{price}</div>
        <AddButton id={id} count={count}/>
    </div>
   </div>
   
   </>
  )
}

export default Card