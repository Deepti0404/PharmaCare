import React from 'react'
import Cards from '../components/Cards'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Shopbycat from '../components/Shopbycat'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Slider></Slider>
      <Cards></Cards>
      <Announcement></Announcement>
      <Shopbycat></Shopbycat>
      <Footer></Footer>
    </div>
  )
}

export default Home
