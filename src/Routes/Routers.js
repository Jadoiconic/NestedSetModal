import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from '../Pages/HomeScreen'
import RootCategory from '../Pages/RootCategory'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/new-root-category' element={<RootCategory />}/>
    </Routes>
  )
}

export default Routers