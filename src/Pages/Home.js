import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from "../Components/HeroSection/HeroSection"
import ProfileGrid from '../Components/ProfileGrid/ProfileGrid'
import Subscription from '../Components/SubscriptionSection/Subscription'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProfileGrid />
      <Subscription />
    </div>
  )
}
