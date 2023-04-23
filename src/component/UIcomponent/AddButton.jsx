import React from 'react'
import "./card.css"
import { useDispatch } from 'react-redux'
import { CartSliceAction } from '../../redux/reducer/Cart_Slice'
const AddButton = ({count,id,disabled}) => {
 
  const dispatch=useDispatch()
  // const [count,setCount]=useState(0)
   const plus=()=>{
    // console.log("check the id",id)
    if(!disabled)dispatch(CartSliceAction.plus(id))
   }
   const minus=()=>{
    if(!disabled)
    dispatch(CartSliceAction.minus(id))
   }
  return (
    <button disabled={disabled?disabled:false} className='add_button'><span className='add_plus' onClick={ plus}>+</span><span className='add_button_text'>{count?count:"ADD"}</span>{count?<span className='add_plus'onClick={minus}>-</span>:""}</button>
  )
}

export default AddButton