import React from "react";

const About = () => {
  return (
    <div id="About" className=" my-[20vh] w-full p-2 sm:w-[72vw] flex flex-col md:flex-row mx-auto ">
      <div className="about-left relative w-full mb-[5rem] md:mb-0 md:w-[50%]">
        <div className="about-img w-[90%] h-[60vh] rounded-2xl overflow-hidden bg-slate-500">
          <img className="h-full object-cover w-full" src="@/images/about-img.jpg" alt="" />
        </div>
        <div className="bg-white absolute flex justify-center  right-0 bottom-[-30px] rounded-full z-20">
          <div className="about-rotate-img">
            <img
              className="z-100 w-[12rem]"
              src="@/images/about-rotate.svg"
              alt=""
            />
          </div>
          <div className="absolute top-[3.3rem]">
            <img
              className=" w-16"
              src="@/images/working-emoji.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="about-right flex flex-col justify-center items-center md:items-start w-full md:w-[50%] gap-5">
        <h3 className="text-[1.1rem] tracking-tight text-blue-500 font-bold">ABOUT ME</h3>
        <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-[#333b42] leading-9">Front-end Developer <br />
        based in Lahore, Punjab 📍</p>
        <p className="text-lg text-[#4D5B67]">Hey, my name is Rustam Ali Kazmi, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p className="text-lg text-[#4D5B67]">My main stack currently is React in combination with Tailwind CSS and javascript.</p>
      </div>
    </div>
  );
};

export default About;
