import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './components/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/dashboard' Component={Dashboard}/>
    </Routes>
  )
}

export default AllRoutes