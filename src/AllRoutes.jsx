import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/dashboard' Component={Home}/>
    </Routes>
  )
}

export default AllRoutes