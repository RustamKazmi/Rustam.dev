import aboutImage from '../assets/images/about-img.jpg'
import aboutRotate from '../assets/images/about-rotate.svg'
import aboutWorkingEmoji from '../assets/images/working-emoji.jpg'

const About = () => {
  return (
    <div id="About" className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative w-full md:w-[45%] mb-16 md:mb-0">
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  className="h-full object-cover w-full" 
                  src={aboutImage} 
                  alt="Rustam Ali Kazmi - Full Stack Developer" 
                />
              </div>
              <div className="bg-white absolute flex justify-center right-[-20px] md:right-[-30px] bottom-[-30px] rounded-full shadow-xl z-20">
                <div className="about-rotate-img">
                  <img
                    className="w-[10rem] md:w-[12rem]"
                    src={aboutRotate}
                    alt="Full-Stack Web Developer"
                  />
                </div>
                <div className="absolute top-[2.8rem] md:top-[3.3rem]">
                  <img
                    className="w-12 md:w-16"
                    src={aboutWorkingEmoji}
                    alt="Working"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[55%] space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-blue-600 font-bold">ABOUT ME</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Full-Stack Developer
                <span className="block mt-2">based in Lahore, Punjab 📍</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I&apos;m <span className="font-semibold text-gray-900">Rustam Ali Kazmi</span>, a Full-Stack Developer with <span className="font-semibold text-blue-600">2.5 years</span> of hands-on experience working on real-time enterprise-level web applications.
              </p>
              <p className="text-lg">
                I specialize in building <span className="font-semibold text-gray-900">scalable, maintainable, and performance-optimized</span> solutions using modern frameworks like <span className="font-semibold">Angular</span>, <span className="font-semibold">Next.js</span>, and libraries like <span className="font-semibold">React</span>. I&apos;ve worked extensively on integrating RESTful APIs, managing application state, database queries, and delivering seamless user experiences.
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-2xl font-bold text-blue-600">2.5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <p className="text-2xl font-bold text-indigo-600">10+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;