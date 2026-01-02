import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import DashboardHome from './DashboardHome'


const Dashboard = () => {
  return (
    <>
        <div className='flex'>
          <SideNav />
          <div className='w-full'>
            <Navbar />
            <DashboardHome/>
          </div>
      </div>
    </>
  )
}

export default Dashboard