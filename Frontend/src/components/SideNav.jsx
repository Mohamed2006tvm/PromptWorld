import React from 'react'
import { LayoutDashboard, FolderOpenDot } from 'lucide-react'
import logo from './assests/logo3.jpg'
import { Link } from 'react-router-dom'

const SideNav = () => {

  const navItem =
    "group flex items-center gap-3 px-4 py-2 rounded-[10px] text-[#868686] " +
    "hover:bg-[#262626] hover:text-[#00ff88] transition-all duration-200"

  return (
    <div className="px-2 w-[15%] min-h-screen bg-[#1D1D1D]">

      <div className="flex px-3 gap-3 items-center py-3">
        <img src={logo} className="w-[45px] h-[45px] rounded-[8px]" />
        <div>
          <h1 className="text-[18px] font-bold text-white">Prompt World</h1>
          <p className="text-[#868686]">AI Generator</p>
        </div>
      </div>

      <div className="my-6 space-y-2">

        <Link to="/dashboard" className={navItem}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link to="/projects" className={navItem}>
          <FolderOpenDot size={18} />
          <span>Projects</span>
        </Link>

      </div>
    </div>
  )
}

export default SideNav
