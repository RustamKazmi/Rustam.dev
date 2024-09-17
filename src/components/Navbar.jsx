import React, { useRef } from "react";
import Hamburger from "../assets/images/hamburger.svg";
import Close from "../assets/images/close.svg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const Hamref = useRef();
  const AddHamburgerHandler = () => {
    let popupDiv = document.querySelector("#HamNavPopup");
    popupDiv.style.right = "0";
    popupDiv.style.zIndex = "99";
    popupDiv.style.opacity = "1";
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  };
  const AddCloseHandler = () => {
    let popupDiv = document.querySelector("#HamNavPopup");
    popupDiv.style.right = "105%";
    popupDiv.style.zIndex = "0";
    popupDiv.style.opacity = "0.4";
    document.body.style.height = "100%";
    document.body.style.overflowY = "auto";
  };
  return (
    <>
      <div
        id="HamNavPopup"
        className="w-full overflow-y transition-all opacity-40 flex flex-col gap-5 h-[100vh] right-full absolute top-0 bg-white"
      >
        <div className="closeNavIcon flex justify-end px-6 pt-8 p w-full h-fit">
          <span onClick={() => AddCloseHandler()}>
            <IoClose className="text-[2.2rem]" />
          </span>
        </div>
        <ul className="w-full flex flex-col gap-4">
          <div className="flex justify-center items-center text-[2rem] px-6 h-[15vh] cursor-pointer w-full">
            <a href="#Home">
              <li onClick={()=>AddCloseHandler()} className="list-none cursor-pointer hover:text-blue-600 transition-all">
                Home
              </li>
            </a>
          </div>
          <div className="flex justify-center items-center text-[2rem] px-6 h-[15vh] cursor-pointer w-full">
            <a href="#About">
              <li onClick={()=>AddCloseHandler()} className="list-none cursor-pointer hover:text-blue-600 transition-all">
                About
              </li>
            </a>
          </div>
          <div className="flex justify-center items-center text-[2rem] px-6 h-[15vh] cursor-pointer w-full">
            <a href="#Projects">
              <li onClick={()=>AddCloseHandler()} className="list-none cursor-pointer hover:text-blue-600 transition-all">
                Projects
              </li>
            </a>
          </div>
          <div className="flex justify-center items-center text-[2rem] px-6 h-[15vh] cursor-pointer w-full">
            <a href="#Contact">
              <li onClick={()=>AddCloseHandler()} className="list-none cursor-pointer hover:text-blue-600 transition-all">
                Contact
              </li>
            </a>
          </div>
        </ul>
      </div>
      <div className="bg-[#fff] w-full border z-[9] sm:h-20 border-slate-200 shadow-sm shadow-slate-200 sticky top-0 h-20 md:h-28 flex items-center justify-between px-7">
        <div className="logo">
          <a href="" className="text-[1.5rem] sm:text-[2rem] font-bold">
            {"<"}Rustam<span className="text-red-950">.</span>
            <span className="text-sky-900">dev{"/>"}</span>
          </a>
        </div>
        <div className="nav-btns hidden sm:flex gap-7 font-semibold text-lg">
          <a href="#Home">
            <li className="list-none cursor-pointer hover:text-blue-600 transition-all">
              Home
            </li>
          </a>
          <a href="#About">
            <li className="list-none cursor-pointer hover:text-blue-600 transition-all">
              About
            </li>
          </a>
          <a href="#Projects">
            <li className="list-none cursor-pointer hover:text-blue-600 transition-all">
              Projects
            </li>
          </a>
          <a href="#Contact">
            <li className="list-none cursor-pointer hover:text-blue-600 transition-all">
              Contact
            </li>
          </a>
        </div>
        <div className="hamburger flex sm:hidden cursor-pointer">
          <img
            className="w-10 "
            onClick={() => AddHamburgerHandler()}
            src={Hamburger}
            alt=""
          />
        </div>
      </div>
      {/* <div className="right-nav-btns-pane h-[100vh] w-full z-[99] absolute">
                 
        </div> */}
    </>
  );
};

export default Navbar;
