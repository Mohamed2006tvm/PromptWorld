import { useNavigate } from 'react-router-dom'
import { supabase } from '../../Supabase'
import { LogOut } from 'lucide-react'

const SignOutButton = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error(error.message)
    } else {
      navigate('/') 
    }
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-2 py-2 rounded-lg
                 border border-red-500/40 text-red-400
                 hover:bg-red-500/10 transition"
    >
      <LogOut size={18} />
      
    </button>
  )
}

export default SignOutButton
