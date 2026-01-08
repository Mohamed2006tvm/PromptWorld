import React from 'react'
import logo from '../assests/logo3.jpg'
import google from '../assests/google icon.png'
import { MoveRight, Shield, Copyright } from 'lucide-react'
import { supabase } from '../../Supabase'

const LoginPage = () => {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://promptingworld.netlify.app/dashboard'
      }
    })

    if (error) {
      alert('Error logging in')
      console.error(error)
    }
  }

  return (
    <div className='w-full bg-black min-h-screen sm:py-50 py-18'>
      <div className="absolute top-0 left-0 md:w-[300px] sm:w-[100px] md:h-[300px] sm:h-[200px] bg-[#00ff88]/40 blur-[180px]" />
      <div className="absolute bottom-0 right-0 md:w-[300px] sm:w-[100px] md:h-[300px] sm:h-[200px] bg-[#00ff88]/40 blur-[180px]" />

      <div className='sm:w-[60%] lg:w-[23%] w-[90%] bg-[#161616] mx-auto rounded-[12px]'>
        <div className='flex flex-col items-center py-4 text-center gap-2 px-6'>

          <img src={logo} className='w-[55px] h-[50px] rounded-lg mt-3' />
          <h1 className='text-[35px] font-bold text-[#9FFC59]'>Prompt World</h1>
          <p className='text-[#868686]'>
            Welcome back! Choose your preferred sign-in method
          </p>

          <button
            onClick={handleGoogleLogin}
            className="flex w-full justify-between items-center gap-3 rounded-xl border border-gray-700 bg-[#212020] px-4 py-3 text-white hover:bg-[#272727] mt-10"
          >
            <div className='flex gap-2 items-center'>
              <img src={google} className='w-6' />
              <span>Continue with Google</span>
            </div>
            <MoveRight />
          </button>

          <span className='sm:text-[12px] text-[10px] flex items-center justify-center gap-1 w-full py-2 rounded-xl mt-5 bg-[#212020] text-[#868686]'><Shield /> Secure authentication powered by supabase Auth</span>

          <span className='sm:text-[14px] text-[12px] text-[#868686] mt-5'> By continuing, you agree to our <a href="" className='text-[#9FFC59] underline '>Terms of Service</a> and <a href="" className='text-[#9FFC59] underline'>Privacy Policy</a></span>


        </div>
        <div>
          <span className='flex items-center justify-center gap-2 text-[12px] text-[#868686] tracking-[1px] mt-6 border-t-[1px] border-[#1D1D1D] py-6'><Copyright />2026 Prompt World. All right reserved</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
