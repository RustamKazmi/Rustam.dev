import { CgMail } from 'react-icons/cg';
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div id='Contact' className='w-full py-20 bg-white'>
      <div className='w-full mx-auto px-6'>
        <div className='text-center md:text-left mb-12 space-y-4'>
          <h3 className='text-sm uppercase tracking-wider text-blue-600 font-bold'>CONTACT</h3>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Don&apos;t be shy! Hit me up! 👇
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Location Card */}
          <div className="flex-1 group">
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-white rounded-full p-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <GrMapLocation className='text-3xl text-blue-600'/>
              </div>
              <div className='text-center md:text-left space-y-1'>
                <p className='text-xl font-bold text-gray-900'>Location</p>
                <p className='text-gray-600 text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer'>
                  Lahore, Punjab
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex-1 group">
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-white rounded-full p-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <CgMail className='text-3xl text-blue-600'/>
              </div>
              <div className='text-center md:text-left space-y-1'>
                <p className='text-xl font-bold text-gray-900'>Email</p>
                <a 
                  href="mailto:ashfaqkazmi1975@gmail.com" 
                  className='text-gray-600 text-lg font-medium hover:text-blue-600 transition-colors block'
                >
                  ashfaqkazmi1975@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact