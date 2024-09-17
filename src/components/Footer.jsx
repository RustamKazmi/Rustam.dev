import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='w-full bg-[#2D2E32] h-[25vh] text-white flex flex-col md:flex-row md:flex items-center md:justify-between px-3 md:px-20'>
      <p className='text-md text-center md:text-left w-full font-bold'>Copyright &copy; 2024. All rights are reserved</p>
      <div className="link-icons my-6 flex gap-3">
            <CiLinkedin className="text-[2rem] hover:text-blue-500 cursor-pointer" />
            <a target="blank" href="https://github.com/RustamKazmi"><FiGithub className="text-[2rem] hover:text-blue-500 cursor-pointer" /></a>
          </div>
    </div>
  )
}

export default Footer
