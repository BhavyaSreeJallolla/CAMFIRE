import React from 'react'
import './Homepage.css'

import Delicious_menu from '../Delicious_menu/Delicious_menu.jsx'
import Specialdish from '../Specialdish/Specialdish.jsx'


const Homepage = () => {
  return (
    <div>
       <Specialdish/>
      <Delicious_menu/>
    </div>
  )
}

export default Homepage
