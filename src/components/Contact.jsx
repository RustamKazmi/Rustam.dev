import React from 'react';
import { CgMail } from 'react-icons/cg';
import { GrMapLocation } from "react-icons/gr";


const Contact = () => {
  return (
    <div id='Contact' className='container mx-auto mb-[20vh] w-[75vw]'>
      <h3 className='text-[1.2rem] text-center md:text-start font-bold text-blue-600 mb-4'>Contact</h3>
      <p className='text-[1.7rem] font-bold text-center md:text-start text-[#2D2E32]'>Don't be shy! Hit me up! 👇</p>
      <div className="contact_details flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="contact-location flex flex-col md:flex-row gap-4 mt-[4rem] items-center">
                <div className="bg-white rounded-full border border-slate-200 shadow-sm shadow-slate-400 p-3">
                <GrMapLocation  className='text-[1.6rem] text-blue-600'/>
                </div>
                    <div className='flex flex-col items-center md:inline-block'>
                        <p className='text-[1.5rem] font-bold'>Location</p>
                        <p className='text-slate-500 cursor-pointer text-lg tracking-wide font-semibold hover:text-blue-600'>Lahore, Punjab</p>
                    </div>
            </div>
            <div className="contact-Mail flex flex-col md:flex-row gap-4  md:mt-[4rem] items-center">
                <div className="bg-white rounded-full border border-slate-200 shadow-sm shadow-slate-400 p-3">
                <CgMail  className='text-[1.8rem] text-blue-600'/>
                </div >
                    <div className='flex flex-col items-center md:inline-block'>
                        <p className='text-[1.5rem] font-bold'>Email</p>
                        <a href="mailto:ashfaqkazmi1975@gmail.com" className='text-slate-500 text-lg tracking-wide font-semibold hover:text-blue-600' >ashfaqkazmi1975@gmail.com</a>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
