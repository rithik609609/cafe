import React from 'react'
import "./card.css"
const Divider = ({name, setRotate,rotate}) => {
  return (
     <div className='updown_main_div'>
        <h4>{name}</h4>
        <hr/>
        <div onClick={()=>{setRotate((pre)=>!pre)}} style={{marginTop:`${rotate?"-0.4rem":"0.5rem"}`,marginLeft:"1%", transform:`${rotate?"rotate(0deg)":"rotate(180deg)"}`,cursor:"pointer"}}>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M7.28995 3.29L4.69995 0.700002C4.30995 0.310002 3.67995 0.310002 3.28995 0.700002L0.699949 3.29C0.0699487 3.92 0.519949 5 1.40995 5L6.58995 5C7.47995 5 7.91995 3.92 7.28995 3.29Z" fill="#3CBCB4"></path></svg>
    </div>
      </div>
  )
}

export default Divider