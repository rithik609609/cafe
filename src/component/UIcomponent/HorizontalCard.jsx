import React from 'react'
import AddButton from './AddButton'

const HorizontalCard = ({name,type,price,img,id,count,disabled}) => {
  return (
    <div className='hori_card'>
        <img alt='food_image' src={img}  width={"100%"} height={"90%"} className='card_image' />
        <div className='hori_description_div'>
            <h3>{name}</h3>
            <div className='hori_price_div'>
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{marginRight:"5px"}}><img alt='icon' src={`${type==="veg"?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1lB2lGMCyZYmGQ5YsmFrzLbxh0xq-h-GTi_kt8oivw&usqp=CAU&ec=48665698':"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"}`} height={"20px"} width={"20px"}></img></div>
                <div>₹{price}</div>
                </div>
              <div> <AddButton id={id} count={count} disabled={disabled} /></div>
            </div>
        </div>
    </div>
  )
}

export default HorizontalCard