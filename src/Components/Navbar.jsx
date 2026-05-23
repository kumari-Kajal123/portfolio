import React, { useState } from 'react'

  import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (<>

<nav className="bg-gray-900 text-white px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">

    {/* Logo */}
    <h1 className="text-2xl font-bold"> Kajal Developer </h1>

    {/* Menu Button */}
    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl" > ☰ </button>

    {/* Navbar */}
    <ul
      className={` fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto  bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center justify-start md:justify-normal gap-10 md:gap-8 text-xl md:text-lg transform transition-transform duration-500 pt-24 md:pt-0 z-[999]
        ${ isOpen? "translate-x-0"  : "translate-x-full md:translate-x-0"  }`} >

      {/* Close Button */}
      <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-3xl md:hidden">  ✕ </button>

      <li>
        <NavLink  to="/" end className={({ isActive }) => isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400" } >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about"
          className={({ isActive }) =>  isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400" }>  
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/skills"
          className={({ isActive }) => isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"  : "hover:text-cyan-400"  } >
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink to="/projects"
          className={({ isActive }) => isActive  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400" }
        > Projects
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact-us"
          className={({ isActive }) =>  isActive  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400" } > 
          Contact Us
        </NavLink>
      </li>

    </ul>
  </div>
</nav>
    
  </>
  )
}
