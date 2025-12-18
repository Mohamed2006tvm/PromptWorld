import React from 'react'
import { Moon, Search, LogOut } from 'lucide-react'
import { supabase } from './Supabase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) alert("Error in log out")
    else navigate('/')
  }

  const iconBtn =
    "flex items-center justify-center border-2 border-[#2a2a2a] rounded-[10px] p-2 " +
    "text-white hover:bg-[#2a2a2a] hover:border-[#00ff88] hover:text-[#00ff88] " +
    "transition-all duration-200 active:scale-95"

  return (
    <div className="sm:w-[80%] w-[90%] py-3 bg-[#1D1D1D] sm:ml-[20%] ml-[10%] 
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

      <div className="flex items-center gap-4 sm:px-4">
        <button className={iconBtn}>
          <Moon size={20} />
        </button>

        <button
          onClick={handleLogout}
          className={`${iconBtn} hover:text-red-500 hover:border-red-500`}
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
