import React, { useEffect, useState } from "react"
import { supabase } from "../../Supabase"

const Userlogo = () => {

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

    const name =
        user.user_metadata?.full_name ||
        email?.split("@")[0]?.toUpperCase()

    const avatarLetter = name?.charAt(0).toUpperCase()


    return (
        <div>
            <div>
                <div
                    className="w-9 h-9 rounded-full bg-orange-500 
                    flex items-center justify-center font-bold text-white"
                >
                    {avatarLetter}
                </div>
            </div>
        </div>
    )
}

export default Userlogo