import React from 'react';
import image from "../assets/kajal.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function First() {
  return (
    <>
<section className="min-h-screen bg-gray-950 text-white px-6 md:px-16 py-10">
  
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

    {/* Left Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">

      <p className="mt-6 text-gray-300 text-base md:text-lg"> Hii , I'm <span className="text-cyan-400">Kajal</span>  </p>

      <h3 className="text-4xl md:text-6xl font-bold leading-tight">  Full Stack Developer  </h3>

      <p className="mt-1 text-gray-300 text-base md:text-lg"> I create modern websites, motion , and Tailwind,  and Blender. </p>

      <div className="flex  gap-6 mt-10">

        {/* Github */}
        <a href="https://github.com/" target="_blank" rel="noreferrer"
          className="  w-14 h-14 flex items-center justify-center rounded-full  bg-gray-800  text-white text-2xl hover:bg-cyan-500 transition  hover:-translate-y-2 duration-300 " >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
          className="  w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-blue-500 transition hover:-translate-y-2 duration-300 " >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/sun.shine3126" target="_blank" rel="noreferrer" 
          className=" w-14 h-14 flex items-center justify-center rounded-full  bg-gray-800 text-white text-2xl hover:bg-pink-500  transition  hover:-translate-y-2 duration-300 " >
          <FaInstagram />
        </a>

      </div>



      <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition">
        <Link to='/projects' >View Projects</Link>
      </button>

    </div>

    {/* Right Image */}

    <div className="w-full md:w-1/2 flex justify-center items-center relative py-16 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Gradient Background Card */}
      <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-[40px] rotate-12 shadow-2xl"> </div>

      {/* Glass Border Card */}
      <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] border border-white/30 bg-white/10 backdrop-blur-md rounded-[40px] -rotate-6"> </div>

      {/*  Circle */}
      <div className="absolute top-10 left-10 w-6 h-6 border-2 border-cyan-400 rounded-full animate-bounce"></div>

      {/* Dot */}
      <div className="absolute bottom-16 left-20 w-4 h-4 bg-cyan-400 rounded-full"></div>

      {/* Plus */}
      <div className="absolute top-20 right-16 text-white text-4xl font-light border-2 border-cyan-400 rounded-full animate-bounce"> </div>

      {/*  Line */}
      <div className="absolute bottom-10 right-10 w-20 h-[2px] bg-cyan-400 rotate-45"></div>

      {/* Image */}
      <img src={image} alt="profile" className=" relative z-10 w-64 md:w-80 object-cover rounded-[30px] rotate-[-10deg] hover:rotate-0 hover:scale-105 transition-all  duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]  "/>

    </div>


  </div>




</section>
    </>
  )
}
