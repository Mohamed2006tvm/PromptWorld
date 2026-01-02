import React from 'react'
import { LayoutDashboard, FolderOpenDot ,SquareChartGantt,BadgeQuestionMark} from 'lucide-react'
import logo from './assests/logo3.jpg'
import { Link } from 'react-router-dom'
import UserProfile from './auth/Userprofile'

const SideNav = () => {

  const navItem =
    "group flex items-center gap-3 px-4 py-2 rounded-[10px] text-[#868686] " +
    "hover:bg-[#262626] hover:text-[#00ff88] transition-all duration-200"

  return (
    <div className="md:px-3 md:w-[18%] w-[15%] min-h-screen bg-[#1D1D1D] flex flex-col justify-between">

     <div>
       <div className="flex gap-3 items-center px-3 py-3">
        <img src={logo} className="md:w-[45px] w-[35px] md:h-[45px] h-[35px] rounded-[8px]" />
        <div>
          <h1 className="text-[18px] font-bold text-white md:block hidden">Prompt World</h1>
          <p className="text-[#868686] md:block hidden">AI Generator</p>
        </div>
      </div>

      
      <div>

        <Link to="/dashboard" className={navItem}>
          <LayoutDashboard size={18} />
          <span className='md:block hidden'>Dashboard</span>
        </Link>

        <Link to="/projects" className={navItem}>
          <FolderOpenDot size={18} />
          <span className='md:block hidden'>Projects</span>
        </Link>
      </div>
     </div>

      <div className="my-6 flex flex-col">
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col  '>
            <Link className={navItem}>
              <SquareChartGantt />
              <span className='md:block hidden'>Billing and Plans</span> 
          </Link>
          <Link className={navItem}>
              <BadgeQuestionMark />
              <span className='md:block hidden'>Help & Support</span>
          </Link>
          </div>

          <UserProfile/>
        </div>

      </div>
    </div>
  )
}

export default SideNav
