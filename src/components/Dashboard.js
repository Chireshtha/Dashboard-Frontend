import React from 'react'
import '../styles/Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container'>
        <div className='dashboard'>
        <h4><span>CTV </span> &nbsp; SmartHub &nbsp;<sup> Cell </sup> <sub>Digital Platform Conductor</sub></h4>
        <Link to='/Login'><button type='submit'>Login</button></Link>
    </div>
    </div>
  )
}

export default Dashboard
