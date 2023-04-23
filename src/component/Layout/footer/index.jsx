import React from 'react'
import IconCard from '../../UIcomponent/IconCard'
import { Link } from 'react-router-dom'
import "./footer.css"
import { useSelector } from 'react-redux'
const Footer = () => {
  const cartData=useSelector((state)=>state.cartReducer.cartData)
  const arrayData= Object.values(cartData)
   const count=arrayData.length?arrayData.reduce((a,b)=>a+b):0

  return (
    <div className='footer_main_div'>
        <div className='footer_menu'><span>Menu</span></div>
        <div className='footer_nav_div'>
         <ul>
        <li><Link><IconCard iconName={"fa fa-bolt"} iconColor={"#0056ff8a"}/></Link></li>
        <li >
          <IconCard iconName={'fa fa-home'}/>
          </li>
        <li style={{position:"relative"}}><Link to='/placeorder'><IconCard iconName='fa fa-shopping-cart'/>{count?<div className='cart_count'>{count}</div>:""}</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer