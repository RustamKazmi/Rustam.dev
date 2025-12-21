import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-sm md:text-base text-center md:text-left text-gray-300'>
            Copyright &copy; 2025 <span className='font-semibold text-white'>Rustam Ali Kazmi</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/rustam-ali-kazmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 group"
            >
              <CiLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/RustamKazmi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
            >
              <FiGithub className="text-2xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer