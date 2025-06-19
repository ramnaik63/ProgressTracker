import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav style={{ padding: '10px', background: '#eee' }}>
            <Link to={"/"} style={{ marginRight: '15px' }}>Home</Link>
            <Link to={"/login"} style={{ marginRight: '15px' }}>Login</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </nav>
    </div>
  )
}

export default Navbar