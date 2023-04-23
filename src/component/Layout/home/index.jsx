import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import { useSelector } from 'react-redux'

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