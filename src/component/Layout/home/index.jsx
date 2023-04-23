import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'


const Home = () => {
 
  
  return (
    <>
        <Header/>
       <div><Outlet/></div>
    <Footer/>
    </>
  )
}

export default Home