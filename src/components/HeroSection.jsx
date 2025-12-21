import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import skillIcon1 from "../assets/images/skill-icons-1.svg"
import skillIcon2 from "../assets/images/skill-icons-2.svg"
import skillIcon3 from "../assets/images/skill-icons-3.svg"
import skillIcon4 from "../assets/images/skill-icons-4.svg"
import skillIcon5 from "../assets/images/skill-icons-5.svg"

const HeroSection = () => {
  return (
    <div id="Home" className="w-full py-12 md:py-20">
      <div className="w-full mx-auto px-6">
        {/* Hero Content */}
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 items-center mb-20">
          <div className="w-full md:w-[55%] space-y-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-extrabold tracking-tight leading-tight">
                Full-Stack
                <span className="block mt-2">
                  Developer
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> in Lahore</span>
                </span>
              </h1>
            </div>
            <p className="text-center md:text-left text-lg md:text-xl text-gray-600 leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-gray-900">Rustam Ali Kazmi</span>. A passionate Full Stack Developer
              based in Lahore, Punjab. 📍
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/rustam-ali-kazmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
              >
                <CiLinkedin className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
              </a>
              <a 
                href="https://github.com/RustamKazmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 group"
              >
                <FiGithub className="text-2xl text-gray-700 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-[45%] flex justify-center">
            <div className="hero-img transform hover:scale-105 transition-transform duration-300"></div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-gray-900 whitespace-nowrap">
                Tech Stack
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="md:hidden h-px w-full bg-gray-300"></div>
            <ul className="flex justify-center flex-wrap gap-8 md:gap-10">
              <li className="transform hover:scale-110 transition-transform duration-300">
                <img className="skill-icon" src={skillIcon1} alt="HTML & CSS" />
              </li>
              <li className="transform hover:scale-110 transition-transform duration-300">
                <img className="skill-icon" src={skillIcon2} alt="JavaScript & TypeScript" />
              </li>
              <li className="transform hover:scale-110 transition-transform duration-300">
                <img className="skill-icon" src={skillIcon3} alt="React & Next.js" />
              </li>
              <li className="transform hover:scale-110 transition-transform duration-300">
                <img className="skill-icon" src={skillIcon4} alt="Tailwind & Sass" />
              </li>
              <li className="transform hover:scale-110 transition-transform duration-300">
                <img className="skill-icon" src={skillIcon5} alt="Angular & MySQL" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;