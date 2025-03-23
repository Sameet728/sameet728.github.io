import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from "react-icons/fa";  

function Projects({darkmode}) {
  return (
    <>
    <div id='projects' className={` ${darkmode ? "bg-gray-950 text-gray-50":""} pt-20 sm:pt-36  sm:mt-0 sm:h-[90vh] pl-4 pr-4 sm:pl-20 sm:pr-20`}>
    <div className='flex flex-col items-center gap-2'>
          <h2 id='animation' className='text-1/2xl text-gray-500'>Browse My Recent</h2>
          <h2 id='animation' className='text-4xl font-semibold'>Projects</h2>
        </div>
        <div className='grid sm:gap-10 gap-5 grid-cols-2 sm:grid-cols-4 mt-20'>
          <div id='animation' className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img id='animation' src="./12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 id='animation' className={ `${darkmode ?  "text-white ": ""} text-black text-2xl font-bold`}>Instagram Clone</h2>
            <div id='animation' className='flex justify-center items-center sm:gap-24 gap-5'>
           <a href="https://instagram-clone-7akg.onrender.com" target='_blank'> <Button className={`${darkmode ? "bg-white":""}`}><span className='text-2xl '>👁️</span> </Button></a> 
            <a href="https://github.com/Sameet728/Instagram_Clone" target='_blank'><FaGithub className={`${darkmode ? "text-white" :"text-black "}  text-4xl cursor-pointer hover:scale-125 transition-all`} /></a> 
              
            </div>
          </div>
          <div id='animation' className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img id='animation' src="./aitrip.png" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 className={ `${darkmode ?  "text-white ": ""} text-black text-2xl font-bold`}>Ai Trip Planner</h2>
            <div id='animation' className='flex justify-center items-center sm:gap-24 gap-5'>
            <a id='animation' href="https://ai-trips-rose.vercel.app/" target='_blank'> <Button className={`${darkmode ? "bg-white":""}`}><span className='text-2xl'>👁️</span></Button></a> 
            <a id='animation' href="https://github.com/Sameet728/Ai-Trips" target='_blank'> <FaGithub className={`${darkmode ? "text-white" :"text-black "}  text-4xl cursor-pointer hover:scale-125 transition-all`} /></a> 
              
            </div>
          </div>
          <div id='animation' className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img id='animation' src="./airbnb.png" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 id='animation' className={ `${darkmode ?  "text-white ": ""} text-black text-2xl font-bold`}>AirBNB Clone</h2>
            <div id='animation' className='flex justify-center items-center sm:gap-24 gap-5'>
            <a id='animation' href="https://airbnb-1rcz.onrender.com" target='_blank'> <Button className={`${darkmode ? "bg-white":""}`}><span className='text-2xl'>👁️</span></Button></a> 
            <a id='animation' href="https://github.com/Sameet728/Project" target='_blank'><FaGithub className={`${darkmode ? "text-white" :"text-black "}  text-4xl cursor-pointer hover:scale-125 transition-all`} /></a> 
              
            </div>
          </div>
          <div id='animation' className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img id='animation' src="./DALL·E 2025-03-23 23.56.28 - A futuristic AI chatbot interface designed for a portfolio website. The chatbot appears as a sleek, glowing robotic assistant with a friendly digital .webp" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 id='animation' className={ `${darkmode ?  "text-white ": ""} text-black text-2xl font-bold`}>Ai ChatBot</h2>
            <div className='flex justify-center items-center sm:gap-24 gap-4'>
            <a id='animation'  className='w-1/2' href="https://sameet-ai-updated.vercel.app/" target='_blank'> <Button className={`${darkmode ? "bg-white":""}`}><span className='text-2xl'>👁️</span></Button></a> 
            <a id='animation' className='w-1/2'  href="https://github.com/Sameet728/SameetAi_Updated" target='_blank'><FaGithub className={`${darkmode ? "text-white" :"text-black "}  text-4xl cursor-pointer hover:scale-125 transition-all`} /></a> 
              
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Projects