import { useState } from 'react'
import { Building2, Truck, Briefcase } from 'lucide-react'
import ImageLightbox from './ImageLightbox'
import ProjectCard from './ProjectCard'
import memershipDashboardImg from '../assets/screenshots/membership-dashboard.png'
import metricsDashboardImg from '../assets/screenshots/metrics-dashboard.png'
import loginPageImg from '../assets/screenshots/login-page.png'
import departmentImg from '../assets/screenshots/department.png'

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "MMS – Mosque Management System",
      icon: Building2,
      period: "Feb 2024 - Present",
      status: "Work in Progress",
      description: "A comprehensive real-time web application designed to streamline mosque operations including member management, donation tracking, event coordination, and administrative tasks. Specifically tailored for mosques across the USA, Europe, and Russia with multi-language support.",
      techStack: ["Angular 16+",   "RxJS", "Angular Material", "SCSS", "Chart.js", "REST APIs", "Stripe", "Cloudinary", "TypeScript", "Node.js"],
      keyFeatures: ["Real-time analytics dashboard", "Cloudinary photo management", "Stripe payment integration", "Multi-step responsive forms"],
      images: [
        { src: loginPageImg, alt: "Secure Login Interface" },
        { src: metricsDashboardImg, alt: "Analytics Dashboard" },
        { src: memershipDashboardImg, alt: "Member Management System" },
        { src: departmentImg, alt: "Department Organization" }
      ],
      liveLink: null,
      githubLink: null
    },
    {
      id: 2,
      title: "Numeo Freight Management Platform",
      icon: Truck,
      period: "2022 - Present",
      status: "Live",
      description: "Freight Management Platform (FMP): Web platform for managing freight operations, load tracking, payments, and carrier engagement. Built a real-time load matching system improving carrier efficiency. Optimized search/filtering with advanced algorithms, reducing database load by 40%. Designed a microservices architecture with Rush.js monorepo for scalable deployment.",
      techStack: ["React", "Node.js", "Rush.js", "Microservices", "REST APIs", "WebSocket", "MongoDB", "Redis", "Docker", "AWS"],
      keyFeatures: ["Real-time load matching system", "Advanced search algorithms", "Carrier engagement platform", "Microservices architecture"],
      images: [
        { src: "https://via.placeholder.com/400x300/4F46E5/white?text=Freight+Dashboard", alt: "Freight Management Dashboard" },
        { src: "https://via.placeholder.com/400x300/7C3AED/white?text=Load+Tracking", alt: "Real-time Load Tracking System" }
      ],
      liveLink: "https://agent.numeo.ai/",
      githubLink: null
    },
    {
      id: 3,
      title: "Tamakun Job Seeking Platform",
      icon: Briefcase,
      period: "2025",
      status: "Live",
      description: "A comprehensive job seeking and recruitment platform connecting job seekers with employers across the UAE. Features advanced job matching algorithms, real-time application tracking, employer dashboards, and seamless candidate management. Built with modern web technologies to provide an intuitive user experience for both job seekers and recruiters.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel", "Express", "JWT", "Stripe"],
      keyFeatures: ["Advanced job matching algorithms", "Real-time application tracking", "Employer dashboard & analytics", "Candidate profile management"],
      images: [
        { src: "https://via.placeholder.com/400x300/F59E0B/white?text=Job+Portal+Homepage", alt: "Job Portal Homepage" },
        { src: "https://via.placeholder.com/400x300/EF4444/white?text=Job+Search+Dashboard", alt: "Job Search Dashboard" }
      ],
      liveLink: "https://www.tamakun.ae/",
      githubLink: null
    }
  ]

  const openLightbox = (images, index) => {
    setSelectedImages(images)
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div id='Projects' className='w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-16'>
   
          <h2 className='text-4xl font-bold text-gray-900 mb-6 leading-tight'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>Projects</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover my latest work in web development, showcasing modern technologies, 
            innovative solutions, and user-centric design principles
          </p>
        </div>

        {/* Projects Grid - 2 columns on desktop, 1 on mobile */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={selectedImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </div>
  )
}

export default Projects
