import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Delicious_menu from './Components/Delicious_menu/Delicious_menu'
import Specialdish from './Components/Specialdish/Specialdish'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/specialdish" element={<Specialdish/>}/>
        <Route path='/deliciousmenu' element={<Delicious_menu/>}/>
      </Routes>
    </div>
  )
}

export default App
