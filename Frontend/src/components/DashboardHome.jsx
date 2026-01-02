import { Plus,MessageSquareText,FolderClosed,LayoutTemplate } from 'lucide-react'
import React from 'react'

const DashboardHome = () => {
    return (
        <>
            <div className='bg-[#2A2A2A] min-h-screen'>
                <div className='    py-4 w-[95%] mx-auto'>
                    <div className='flex justify-between items-center' >
                        <div>
                            <h1 className='text-[30px] font-bold'>Welcome back..!</h1>
                            <span className='text-[#868686]'>Generate the prompts easily....</span>
                        </div>
                        <div>
                            <button className='flex items-center gap-1 text-black bg-[#00ff88] px-3 py-2 rounded-[12px] cursor-pointer'> <Plus/>New Project</button>
                        </div>
                    </div>

                    {/* Data's */}
                    <div className='my-15 flex gap-5 items-center '>
                        <div className='flex justify-between items-start bg-[#1D1D1D] px-5 py-5 rounded-[12px] w-[300px]'>
                            <div className='flex flex-col gap-5'>
                                <span className='text-[#868686]'>Total prompts</span>
                                <span className='text-[25px] text-white font-bold'>0</span>
                            </div>
                            <div>
                                <MessageSquareText color='#00ff88'/>
                            </div>
                        </div>
                        <div className='flex justify-between items-start bg-[#1D1D1D] px-5 py-5 rounded-[12px] w-[300px]'>
                            <div className='flex flex-col gap-5'>
                                <span className='text-[#868686]'>Projects</span>
                                <span className='text-[25px] text-white font-bold' >12</span>
                            </div>
                            <div>
                                <FolderClosed color='#00ff88'/>
                            </div>
                        </div>
                        <div className='flex justify-between items-start bg-[#1D1D1D] px-5 py-5 rounded-[12px] w-[300px]'>
                            <div className='flex flex-col gap-5'>
                                <span className='text-[#868686]'>Templates Used</span>
                                <span className='text-[25px] text-white font-bold'>0</span>
                            </div>
                            <div>
                                <LayoutTemplate  color='#00ff88'/>
                            </div>
                        </div>
                        
                    </div>

                    {/* Project History */}
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome