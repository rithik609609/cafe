import React, { useEffect, useState } from 'react'
import JsonData from '../../asset/data/JsonData'
import Card from '../../component/UIcomponent/Card'
import Banner from '../../component/Layout/banner/Banner'
import Divider from '../../component/UIcomponent/Divider'
import { useSelector } from 'react-redux'

const Special = () => {
    const [show,setShow]=useState(true)
    const cartData=useSelector((state)=>state.cartReducer.cartData)
    // console.log(cartData)
    useEffect(()=>{
      window.scroll(0,0)
    },[])
  return (
    <>
    <Banner/>
    <Divider name="Today's Special" setRotate={setShow} rotate={show}/>
   {show&&<div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
   { JsonData.menu.map((res)=>{
           return <Card name={res.name} price={res.price} type={res.type} img={res.image_url} key={res.id} id={res.id} count={cartData[res.id]||0} />
    })
    }
    </div>
    }
    </>
  )
}

export default Special