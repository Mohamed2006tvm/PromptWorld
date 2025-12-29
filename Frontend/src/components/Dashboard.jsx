import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import DashboardHome from './DashboardHome'


const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <div className='flex items-start '>
          <SideNav />
          <Navbar />
        </div>
        <div>
          <DashboardHome/>
        </div>
      </div>
    </>
  )
}

export default Dashboard