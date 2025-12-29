import React, { useEffect, useState } from "react"
import { supabase } from "../../Supabase"
import SignOutButton from "./Signout"

const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!error) {
        setUser(data.user)
        console.log(user.user_metadata.name)
      }
    }

    getUser()
  }, [])

  if (!user) return null

  const email = user.email
  const name =
    user.user_metadata?.full_name ||
    email?.split("@")[0]?.toUpperCase()

  const avatarLetter = name?.charAt(0).toUpperCase()

  return (
    <div>
      <div
        className="flex items-center justify-between gap-3 
        rounded-[12px] p-3 cursor-pointer flex-col-reverse md:flex-row"      >
        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full bg-orange-500 
            flex items-center justify-center font-bold text-white"
          >
            {avatarLetter}
          </div>

          {/* Name & Email */}
          <div className="md:block hidden ">
            <p className="text-sm font-semibold text-white">
              {name}
            </p>
            <p className="text-xs text-[#868686] truncate max-w-[140px]">
              {email}
            </p>
          </div>
        </div>

      
        {/* <MoreVertical size={18} className="text-[#868686]" />  */}
          <SignOutButton/>




      
      </div>
    </div>
  )
}

export default UserProfile
