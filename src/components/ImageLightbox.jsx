import { useState, useEffect } from 'react'

const ImageLightbox = ({ images = [], isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !images.length) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  const goToNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  const goToPrevious = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  // Don't render if not open or no images
  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[currentIndex]
  if (!currentImage) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 z-20 bg-black/30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-black/50"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-20 bg-black/30 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 hover:bg-black/50"
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-20 bg-black/30 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 hover:bg-black/50"
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Main image container */}
      <div className="max-w-full max-h-full flex flex-col items-center justify-center">
        <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ maxHeight: '80vh', maxWidth: '90vw' }}
          />
        </div>
        
        {/* Image info */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium mb-2">
            {currentImage.alt}
          </p>
          
          {/* Image counter */}
          {images.length > 1 && (
            <p className="text-gray-300 text-sm">
              {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/30 p-3 rounded-lg backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-10 border-2 rounded overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-white shadow-lg scale-110' 
                  : 'border-gray-400 hover:border-gray-200'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  )
}

export default ImageLightbox