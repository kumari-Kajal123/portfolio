import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSocketdotio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Link } from 'react-router-dom'


export default function SkillPage() {

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      color: "text-[#61DAFB]",
      bg: "bg-[#61DAFB]/10",
      description: "Frontend Development",
      path: "react"
    },

    {
      name: "NodeJs",
      icon: <FaNodeJs />,
      color: "text-green-500",
      bg: "bg-green-500/10",
      description: "Backend Development",
      path: "nodejs"
    },

    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      description: "CSS Framework",
      path: "tailwind"
    },

    {
      name: "MongoDB",
      icon: <DiMongodb />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      description: "Database",
      path: "mongodb"
    },

    {
      name: "Express",
      icon: <SiExpress />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      description: "NodeJs Framework",
      path: "express"
    },

    {
      name: "Socket.io",
      icon: <SiSocketdotio />,
      color: "text-white",
      bg: "bg-white/10",
      description: "Real-time Applications",
      path: "socketio"
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white",
      bg: "bg-white/10",
      description: "Version Control",
      path: "github"
    }
  ];


  return (<>
  
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20">

      {/* heading */}
      <div className="text-center">

        <p className="text-cyan-400 tracking-[4px] uppercase"> My Skills</p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4"> Technologies & Tools </h2>

      </div>

      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">

        {skills.map((skill, index) => (

          <Link key={index} to='/skills/all-projects'>

            <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer">

              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl ${skill.bg} flex items-center justify-center text-5xl ${skill.color}`}>  {skill.icon} </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold mt-6"> {skill.name} </h3>

              {/* Description */}
              <p className="text-gray-400 mt-2 text-center">  {skill.description} </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  </>
  )
}
