import React, { useState } from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen">
      <SideNav
        variant="desktop"
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
      />

      <div
        className={
          'fixed inset-0 z-[55] bg-black/60 md:hidden transition-opacity duration-200 ' +
          (mobileSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')
        }
        onClick={() => setMobileSidebarOpen(false)}
      />

      <div
        className={
          'fixed left-0 top-0 z-[60] h-screen md:hidden transform transition-transform duration-300 ease-out ' +
          (mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <SideNav variant="mobile" onClose={() => setMobileSidebarOpen(false)} />
      </div>

      <div className="w-full h-screen overflow-y-auto no-scrollbar flex flex-col">
        <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
