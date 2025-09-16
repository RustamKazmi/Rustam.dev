import React from 'react'
import memershipDashboardImg from '../assets/screenshots/membership-dashboard.png'
import metricsDashboardImg from '../assets/screenshots/metrics-dashboard.png'
import loginPageImg from '../assets/screenshots/login-page.png'
import departmentImg from '../assets/screenshots/department.png'

const Projects = () => {
  return (
 <div id='Projects' className='min-h-[70vh] w-full p-2 sm:w-[72vw] flex flex-col md:flex-row mx-auto  bg-[#F9F9F9] px-4 py-12'>
  <div className=' mx-auto'>
    <h2 className='text-3xl font-bold text-center text-[#393633] mb-8'>Projects</h2>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-2xl font-semibold text-[#2F2F2F]'>🕌 MMS – Mosque Management System</h3>
      <p className='text-sm text-gray-500'>Feb 2025 – Present (Work in Progress)</p>

      <p className='mt-4 text-[#4D5B67]'>
        A real-time web application built to streamline mosque operations like member management, donation tracking, mosque events, and more — targeted for mosques in the USA, Europe, and Russia.
      </p>

      <p className='mt-2 text-[#4D5B67]'>
        <strong>Tech Stack:</strong> Angular 16+, RxJS, Angular Material, SCSS, Chart.js, REST APIs, Stripe, Cloudinary
      </p>

      <p className='mt-2 text-[#4D5B67]'>
        <strong>My Contributions:</strong> Developed reusable components, implemented real-time charts, handled photo uploads via Cloudinary, integrated Stripe for secure donations, and built responsive multi-step forms with full API connectivity.
      </p>

      <div className='mt-4 flex flex-wrap gap-4'>
        <img src={loginPageImg} alt="Login Page"  className="w-full h-full object-contain rounded-md"/>
        <img src={metricsDashboardImg} alt="Metrics Dashboard" className="w-full h-full object-contain rounded-md" />
        <img src={memershipDashboardImg} alt="MMS Members Page" className="w-full h-full object-contain rounded-md" />
        <img src={departmentImg} alt="departments" className="w-full h-full object-contain rounded-md" />
      </div>

      <p className='mt-4 text-sm text-gray-500 italic'>Project is currently in development. Live link will be added upon launch.</p>
    </div>
  </div>
</div>
  )
}

export default Projects
