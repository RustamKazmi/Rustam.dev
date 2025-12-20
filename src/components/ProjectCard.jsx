import { useState } from 'react'
import { Eye, ExternalLink, GitBranch, Code2 } from 'lucide-react'

const ProjectCard = ({ project, onImageClick }) => {
  const [imageError, setImageError] = useState({})

  const handleImageError = (index) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  const handleImageClick = (index) => {
    onImageClick(project.images, index)
  }

  return (
    <div className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group h-full flex flex-col'>
      {/* Project Header */}
      <div className='p-6 pb-4 flex-shrink-0'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center gap-3 flex-1'>
            <div className='p-2 bg-blue-50 rounded-lg'>
              <project.icon size={20} className='text-blue-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight'>
              {project.title}
            </h3>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
            project.status === 'Live' 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-amber-50 text-amber-700 border border-amber-200'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className='text-sm text-gray-500 font-medium mb-3'>{project.period}</p>
        
        <p className='text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3'>
          {project.description}
        </p>
      </div>

      {/* Screenshots Section */}
      <div className='px-6 pb-4 flex-shrink-0'>
        <div className='grid grid-cols-2 gap-2'>
          {project.images.slice(0, 4).map((image, index) => (
            <div 
              key={index} 
              className="relative group/img cursor-pointer overflow-hidden rounded-lg bg-gray-50 border border-gray-200 aspect-video"
              onClick={() => handleImageClick(index)}
            >
              {!imageError[index] ? (
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-all duration-300 group-hover/img:scale-105 pointer-events-none"
                  onError={() => handleImageError(index)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg mb-1">🖼️</div>
                    <div className="text-xs text-gray-500 px-2">{image.alt}</div>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white text-xs font-medium opacity-0 group-hover/img:opacity-100 bg-black/50 px-2 py-1 rounded-full flex items-center gap-1">
                  <Eye size={12} />
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area - Flexible */}
      <div className='flex-grow'>
        {/* Tech Stack */}
        <div className='px-6 pb-4'>
          <h4 className='text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide'>Tech Stack</h4>
          <div className='flex flex-wrap gap-1.5'>
            {project.techStack.slice(0, 5).map((tech, index) => (
              <span key={index} className='px-2 py-1 bg-gray-50 hover:bg-gray-100 text-xs text-gray-700 rounded-md border border-gray-200 transition-colors duration-200'>
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className='px-2 py-1 bg-blue-50 text-xs text-blue-700 rounded-md border border-blue-200'>
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div className='px-6 pb-4'>
          <h4 className='text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide'>Key Features</h4>
          <div className='space-y-1'>
            {project.keyFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className='flex items-center text-xs text-gray-600'>
                <div className='w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0'></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons - Always at bottom */}
      <div className='px-6 pb-6 mt-auto flex-shrink-0'>
        <div className='flex gap-2'>
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md flex items-center justify-center gap-1.5'
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md flex items-center justify-center gap-1.5'
            >
              <GitBranch size={14} />
              Code
            </a>
          )}
          {!project.liveLink && !project.githubLink && (
            <div className='flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-center py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 border border-gray-300'>
              <Code2 size={14} />
              In Development
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard