import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Homepage from '../Components/Homepage/Homepage'
import Aboutus from '../Components/About/Aboutus'

import Delicious_menu from '../Components/Delicious_menu/Delicious_menu'
import Reviewpage from '../Components/Reviewpage/Reviewpage'
import Contactpage from '../Components/Contact/Contactpage'
import Ourteam from '../Components/Ourteam/Ourteam'
import Footerpage from '../Components/Footerpage/Footerpage'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Aboutus/>
      <Specialdish/>
      <Delicious_menu/>
      <Reviewpage/>
      <Contactpage/>
      <Ourteam/>
      <Footerpage/>
    </div>
  )
}

export default Home
