import React from 'react'
import Cards from '../components/Cards'
// import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      {/* <Announcement></Announcement> */}
      <Navbar></Navbar>
      <Slider></Slider>
      <Cards></Cards>
    </div>
  )
}

export default Home
