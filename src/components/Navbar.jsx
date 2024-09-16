import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#fff] w-full border z-[9] sm:h-20 border-slate-200 shadow-sm shadow-slate-200 sticky top-0 h-28 flex items-center justify-between px-7'>
        <div className="logo">
            <a href='' className='text-[2rem] sm:text-[1.6rem] font-bold'>{"<"}Rustam<span className='text-red-950'>.</span><span className='text-sky-900'>dev{"/>"}</span></a>
        </div>
        <div className="nav-btns hidden sm:flex gap-7 font-semibold text-lg">
        <a href="#Home"><li className='list-none cursor-pointer hover:text-blue-600 transition-all'>Home</li></a>
        <a href="#About"><li className='list-none cursor-pointer hover:text-blue-600 transition-all'>About</li></a>
        <a href="#Projects"><li className='list-none cursor-pointer hover:text-blue-600 transition-all'>Projects</li></a>
        <a href="#Contact"><li className='list-none cursor-pointer hover:text-blue-600 transition-all'>Contact</li></a>
        </div>
        <div className="hamburger flex sm:hidden cursor-pointer">
          <img className='w-10 ' src="../images/hamburger.svg" alt="" />
        </div>
    </div>
        {/* <div className="right-nav-btns-pane h-[100vh] w-full z-[99] absolute">
                 
        </div> */}
    </>

  )
}

export default Navbar
