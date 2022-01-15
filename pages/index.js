import React from 'react'
import Hero from '../components/Hero'
import NavComponent from '../components/NavComponent'
import WhyNeed from '../components/WhyNeed'
import GetTouch from '../components/GetTouch'
import Footer from '../components/Footer'
import Clients from '../components/Clients'



export default function Home() {
  return (
    <div>
         <NavComponent/> 
         <Hero/> 
         <WhyNeed/> 
         <Clients/>
         <GetTouch/>
         <Footer/>
    </div>
  )
}
