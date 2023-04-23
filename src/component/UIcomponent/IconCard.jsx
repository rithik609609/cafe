import React from 'react'
import "./card.css"

const IconCard = ({iconName,iconColor}) => {
  return (
    <button className='iconCard' style={{color:iconColor,border:"none"}}>
       <i className={iconName}/>
    </button>
  )
}

export default IconCard