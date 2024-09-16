import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import skillIcon1 from "../assets/images/skill-icons-1.svg"
import skillIcon2 from "../assets/images/skill-icons-2.svg"
import skillIcon3 from "../assets/images/skill-icons-3.svg"
import skillIcon4 from "../assets/images/skill-icons-4.svg"

const HeroSection = () => {
  return (
    <div id="Home" className="content w-full md:w-[79vw] mx-auto">
      <div className="hero-main w-full md:w-[79vw] mt-[13vh] md:mb-[10vh] flex flex-col-reverse md:flex-row gap-10 md:gap-28 mx-auto">
        <div className="heroLeft w-full md:w-[50%]">
          <div className="text-[2.2rem] flex flex-col md:inline-block w-full sm:text-[3.5rem] items-center md:text-[3.5rem] text-[#2D2E32] my-8 font-extrabold tracking-tight md:tracking-wide leading-[3.7rem]">
            <h1>Front-End React</h1>
            <h1 className="flex items-center gap-4">
              {" "}
              Developer{" "}
              <img
                className="w-14"
                src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
                alt="image"
              />
            </h1>
          </div>
          <p className="flex text-center md:text-start text-lg text-[#797878]">
            Hi, I'm Rustam Ali Kazmi. A passionate Front-end React Developer
            based in Lahore, Punjab. 📍
          </p>
          <div className="link-icons justify-center md:justify-start my-6 flex gap-3">
            <CiLinkedin className="text-[2rem] hover:text-blue-500 cursor-pointer" />
            <a target="blank" href="https://github.com/RustamKazmi"><FiGithub className="text-[2rem] hover:text-blue-500 cursor-pointer" /></a>
          </div>
        </div>
        <div className="heroRight flex md:inline-block justify-center w-full md:w-[50%]">
          <div className="hero-img"></div>
        </div>
      </div>
      <div className="skills mt-[15vh] md:mt-0 flex flex-col md:flex-row relative h-[8rem] items-center">
        <div>
        <p className="text-[1.4rem] md:w-36 font-semibold md:mr-7 h-fit text-slate-800 flex gap-6">
          Tech Stack <span className="hidden md:inline-block text-slate-500">|</span>
        </p>
        <div className="md:hidden h-[1px] my-2 mb-5 w-full bg-[#303b42]"></div>
        </div>
        <ul className="flex justify-center md:justify-normal flex-wrap md:flex-nowrap gap-6 md:gap-10 w-full">
          <li>
            <img
              className="skill-icon"
              src={skillIcon1}
              alt="html&css"
            />
          </li>
          <li>
            <img
              className="skill-icon"
              src={skillIcon2}
              alt="JS&TS"
            />
          </li>
          <li>
            <img
              className="skill-icon"
              src={skillIcon3}
              alt="React&Nextjs"
            />
          </li>
          <li>
            <img
              className="skill-icon"
              src={skillIcon4}
              alt="Tailwind&Sass"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
