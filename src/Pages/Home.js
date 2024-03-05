import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from "../Components/HeroSection/HeroSection"
import ProfileGrid from '../Components/ProfileGrid/ProfileGrid'

export default function Home() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <ProfileGrid/>
    </div>
  )
}
