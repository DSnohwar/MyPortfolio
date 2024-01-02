import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const logo="/images/logo2.png"
  return (
    <footer className='footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparant text-white'>
        <div className='container p-12 flex justify-evenly'>
            <div className='flex flex-col items-center'>
                <Image src={logo} alt="Logo" height={200} width={200} />
            </div>
            <p className='text-slate-600 justify-center'>&copy; {new Date().getFullYear()} Deepak Nouhawar. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer