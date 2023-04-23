import React, { useState } from 'react'
import IconCard from '../../component/UIcomponent/IconCard'
import { Link } from 'react-router-dom'
import "./placeorder.css"
import Div from '../../component/UIcomponent/Div'
import JsonData from "../../asset/data/JsonData.json"
import HorizontalCard from '../../component/UIcomponent/HorizontalCard'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../../component/UIcomponent/Divider'
import { CartSliceAction } from '../../redux/reducer/Cart_Slice'
const PlaceOrder = () => {
  const cartData=useSelector((state)=>state.cartReducer.cartData)
  const previous=useSelector((state)=>state.cartReducer.previous)
  const count= Object.keys(cartData).length
  const [currentShow,setCurretShow]=useState(true)
  const [previousShow,setPreviousShow]=useState(true)
  const dispatch=useDispatch()
 const handleprevious=()=>{
  dispatch(CartSliceAction.previous(count?cartData:previous))
  dispatch(CartSliceAction.emptyCart())
  
 }
  return (<>
    <div className='header_main_div'>
        <div className='flex_with_center cafe_icon'>
         <div style={{marginRight:"0.4rem"}}><Link to='/'> <IconCard iconName={"fa fa-arrow-left"}/></Link></div> 
          <h2 style={{margin:"0",fontSize:"20px",fontWeight:"500",lineHeight:"1.2"}}>Place Order</h2>
        </div>
      </div>

      <Divider name='Current Order' setRotate={setCurretShow} rotate={currentShow} />
       <Div>
       {currentShow&&JsonData.menu.map((res)=>cartData[res.id]&&<><HorizontalCard key={res.id} name={res.name} type={res.type} price={res.price} img={res.image_url}  id={res.id} count={cartData[res.id]||0}/><br/></>)}
       </Div>

       <Divider name='Previous Order' setRotate={setPreviousShow} rotate={previousShow} />
       <Div>
       {previousShow&&JsonData.menu.map((res)=>previous[res.id]&&<><HorizontalCard key={res.id} name={res.name} type={res.type} price={res.price} img={res.image_url}  id={res.id} count={previous[res.id]||0} disabled={true}/><br/></>)}
       </Div>
<div className='footer_main_div'>
<div className='placeorder_nav_div'>
 <div>{count} Item</div>
 <Link to='/' style={{textDecoration:"none"}}> <button className='placeorder_button' onClick={handleprevious}><span> place order</span> <span className='placeorder_arrow'><i className='fa  fa-arrow-right'></i></span></button> </Link>
</div>
</div>
</>
  )
}

export default PlaceOrder