import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from "../Components/HeroSection/HeroSection"
import ProfileGrid from '../Components/ProfileGrid/ProfileGrid'
import Layout from '../Components/layout/layout'


export default function Home() {
  return (
    <div className='container' >
       <Header/>
       <HeroSection/>
       <ProfileGrid/>
       <Layout/>
    </div>
  )
}
