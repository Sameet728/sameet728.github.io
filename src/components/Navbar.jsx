import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar({ loading, darkmode, setDarkmode }) {
  const [showMenubar, setShowMenubar] = useState(false);
  const clickHandler = () => {
    setShowMenubar(false);
  };

  return (
    <>
      <div className={`${!loading ? "flex" : "hidden"}`}>
        {/* Mobile Menu Button */}
        <div
          className={`${
            darkmode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"
          } flex items-center sm:hidden border border-b-gray-700 fixed top-0 left-0 w-full p-6 z-50`}
        >
          {showMenubar ? (
            <ImCross className='text-2xl' onClick={() => setShowMenubar(false)} />
          ) : (
            <IoMdMenu className='text-3xl' onClick={() => setShowMenubar(true)} />
          )}
          <div>
            <h2 className='text-2xl pl-20 font-semibold'>
              <a href="#home" onClick={clickHandler}>
                Sameet Pisal
              </a>
            </h2>
            <MdOutlineLightMode
              onClick={() => setDarkmode(!darkmode)}
              className='text-2xl fixed right-5 top-7'
            />
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`${
            darkmode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"
          } hidden sm:flex fixed top-0 left-0 w-full p-6 z-50 border border-b-gray-400`}
        >
          <div className='flex items-center justify-around w-full'>
            <div className='text-2xl font-semibold hover:scale-110 transition-all cursor-pointer'>
              <a href="#home">Sameet Pisal</a>
            </div>
            <ul className='flex justify-center items-center gap-8 font-semibold'>
              <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <a href="#about">About</a>
              </li>
              <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <a href="#experience">Experience</a>
              </li>
              <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <a href="#contact">Contact</a>
              </li>
                            <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <a href="https://sameet728.github.io/Java/">Java</a>
              </li>
              <li
                className={`hover:underline hover:underline-offset-8 ${
                  darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
                } hover:scale-110 transition-all`}
              >
                <MdOutlineLightMode
                  onClick={() => setDarkmode(!darkmode)}
                  className='text-2xl'
                />
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            darkmode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-800"
          } fixed top-20 left-0 w-full h-full z-50 transform ${
            showMenubar ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className='flex flex-col justify-center items-center gap-8 font-semibold pt-24'>
            <li
              className={`hover:underline hover:underline-offset-8 ${
                darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
              } text-2xl`}
            >
              <a href="#about" onClick={clickHandler}>
                About
              </a>
            </li>
            <li
              className={`hover:underline hover:underline-offset-8 ${
                darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
              } text-2xl`}
            >
              <a href="#experience" onClick={clickHandler}>
                Experience
              </a>
            </li>
            <li
              className={`hover:underline hover:underline-offset-8 ${
                darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
              } text-2xl`}
            >
              <a href="#projects" onClick={clickHandler}>
                Projects
              </a>
            </li>
            <li
              className={`hover:underline hover:underline-offset-8 ${
                darkmode ? "hover:text-teal-400" : "hover:text-blue-500"
              } text-2xl`}
            >
              <a href="#contact" onClick={clickHandler}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

