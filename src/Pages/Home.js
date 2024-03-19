import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from "../Components/HeroSection/HeroSection"
import ProfileGrid from '../Components/ProfileGrid/ProfileGrid'
import Footer from '../Components/Footer/Footer'


export default function Home() {
  return (
    <div className='container' >
       <Header/>
       <HeroSection/>
       <ProfileGrid/>
     
       <Footer/>
    </div>
  )
}
