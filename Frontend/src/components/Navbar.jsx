import React from 'react'
import { SunMoon, Search } from 'lucide-react'
import { supabase } from './Supabase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = async ()=>{
    const {error} = await supabase.auth.signOut()

    if(error){
      alert("Error in log out")
    }
    else{
      navigate('/');
    }
  }


  return (
    <>
      <div className='w-[80%] py-3 bg-gray-500 ml-[20%] flex justify-between items-center px-5'>
        <div >
          <div className="relative w-[300px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search prompts, projects"
              className="w-md pl-10 pr-4 py-2 rounded-[18px] bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
        <div>
          <SunMoon color='white' />
          <button onClick={handleLogout}>SignOut</button>
        </div>
      </div>
    </>
  )
}

export default Navbar