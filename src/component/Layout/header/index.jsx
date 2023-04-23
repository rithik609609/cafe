import React, { useEffect, useState } from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import IconCard from '../../UIcomponent/IconCard'

const Header = () => {
const[pathname,setPathName]=useState("/")

useEffect(()=>{
  setPathName(window.location.pathname)
  },[window.location.pathname])

  return (
    <div className='header_main_div'>
      <div className='flex_with_center name_main_div'>
        <div className='flex_with_center cafe_icon'>
          <img src={require("../../../asset/images/cafe_icon.png")} alt='cafe-icon' />
          <div>Sacred Earth Cafe</div>
        </div>
        <div className='flex_with_center'>
        <div style={{marginRight:"0.5rem"}}> <IconCard iconName="fa fa-user"/></div>
         <IconCard iconName="fa-solid fa-hashtag"/>
        </div>
        
      </div>
      <nav>
          <ul onClick={(e)=>{setPathName(e.target.id)}}>
            <li  className={`${pathname==="/"&&'active'}`}><Link id='/'  to='/' > Special</Link></li>
            <li  className={`${pathname==="/food"&&'active'}`}><Link id='food' to='/food' >Food</Link></li>
            <li  className={`${pathname==="/beverages"&&'active'}`}><Link id='beverages' to='/beverages'> Beverages</Link></li>
            <li className={`${pathname==="/desserts"&&'active'}`}><Link id='desserts' to='/desserts' > Desserts</Link></li>
          </ul>
        </nav>
      </div>
  )
}

export default Header