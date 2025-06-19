import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Home}/>
        <Route path='/dashboard' Component={Home}/>
    </Routes>
  )
}

export default AllRoutes