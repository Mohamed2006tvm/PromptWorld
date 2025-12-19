import React from 'react'
import { Moon, Search } from 'lucide-react'
import SignOutButton from './auth/Signout'


const Navbar = () => {

 
  const iconBtn =
    "flex items-center justify-center border-2 border-[#2a2a2a] rounded-[10px] p-2 " +
    "text-white hover:bg-[#2a2a2a] hover:border-[#00ff88] hover:text-[#00ff88] " +
    "transition-all duration-200 active:scale-95"

  return (
    <div className="sm:w-[85%] w-[90%] py-3 bg-[#1D1D1D]  
      flex sm:justify-between justify-end items-center px-5 gap-1 sm:gap-0">

      <div className="relative sm:w-[300px] hidden sm:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search prompts, projects"
          className="w-full pl-10 pr-4 py-2 rounded-[18px] bg-[#262626] text-white 
          placeholder-[#848484] focus:outline-none focus:ring-1 focus:ring-[#00ff88]"
        />
      </div>

      <div className="flex items-center gap-4 sm:px-1">
        <button className={iconBtn}>
          <Moon size={20} />
        </button>

        <SignOutButton/>
      </div>
    </div>
  )
}

export default Navbar
