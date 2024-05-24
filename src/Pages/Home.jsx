import React from 'react'
import Header from '../Components/Header/Header'
import ProductCard from '../Components/ProductCard/ProductCard'
import SectionOne from '../Components/SectionOne/SectionOne'
import SectionTwo from '../Components/SectionTwo/SectionTwo'

const Home = () => {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <ProductCard/>
    </div>
  )
}

export default Home
