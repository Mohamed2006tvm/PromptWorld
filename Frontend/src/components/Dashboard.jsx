import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import DashboardHome from './DashboardHome'


const Dashboard = () => {
  return (
    <>
        <div className='flex items-start '>
          <SideNav />
          <Navbar />
      </div>
    </>
  )
}

export default Dashboard