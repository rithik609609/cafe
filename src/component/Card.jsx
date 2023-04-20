import React from 'react'
import  "./card.css"
const Card = () => {
  return (
    <>
    <div className='food_card'>
   {/* <div className='card_image' style={{backgroundImage:"url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg)"}}>  */}
   <img alt='food_image' src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg' width={"100%"}  className='card_image' />
   
   {/* </div> */}
    <div className='food_name_div'>
        <img alt='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1lB2lGMCyZYmGQ5YsmFrzLbxh0xq-h-GTi_kt8oivw&usqp=CAU&ec=48665698' height={"20px"} width={"20px"}></img>
        <div style={{marginLeft:"5px"}}>Chocolate Bowl</div>
    </div>
    <div className='food_name_div price_div'>
        <div>₹ 299</div>
        <button className='add_button'><span className='add_plus'>+</span> add</button>
    </div>
   </div>
   
   </>
  )
}

export default Card