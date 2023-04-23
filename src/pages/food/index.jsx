import React, { useEffect } from 'react'
import JsonData from '../../asset/data/JsonData'
import HorizontalCard from '../../component/UIcomponent/HorizontalCard'
import { useSelector } from 'react-redux'
import Div from '../../component/UIcomponent/Div'
const Food = () => {
    const cartData=useSelector((state)=>state.cartReducer.cartData)
    useEffect(()=>{
      window.scroll(0,0)
    },[])
  return (
    <>
    {JsonData.menu.map((res)=><Div key={res.id}><HorizontalCard name={res.name} type={res.type} price={res.price} img={res.image_url} id={res.id} count={cartData[res.id]||0}/></Div>)}
    </>
  )
}

export default Food