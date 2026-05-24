import React from 'react'
import image from "../assets/patanahi .jpeg"
import foodRecipe from "../assets/foodRecipe.png"
import ajinexa from "../assets/ajinexa.png"

export default function ProjectPage() {

  const projects = [
  {
    id: 1,
    title: "Food Recipe App",
    description:
      "Recipe application with search and beautiful UI.",
    image: foodRecipe,
    tags: ["React", "BootStrap", "NodeJs"],
    live: foodRecipe,
    github: "https://github.com/kumari-Kajal123/food-recipe.git",
  },

  {
    id: 2,
    title: "Ajinexa Reality",
    description:
      "Responsive Property website with cart functionality and selling.",
    image:ajinexa,
    tags: ["React", "Tailwind"],
    live: ajinexa,
    github: "https://github.com/kumari-Kajal123/ajinexa-reality.git",
  },
];

  return (<>
  <section id="projects" className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20">

  {/* Heading */}
  <div className="text-center">

    <p className="text-cyan-400 tracking-[4px] uppercase"> My Work </p>

    <h2 className="text-4xl md:text-5xl font-bold mt-4">  Featured Projects </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8"> Here are some of my recent projects including frontend development and also many mini projects i have done. </p>
  </div>

{/* Projects Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

  {projects.map((project) => (

    <div key={project.id} className=" rounded-[30px] overflow-hidden bg-[#111827] border border-white/10" >

      {/* video */}
      <div className="overflow-hidden">

        {/* {project.video ? (
          <video src={project.video} controls preload="metadata" className=" w-full h-72 object-cover " /> 
        )  : ( <img src={image} alt={project.title} className="w-full h-72 object-cover " /> )} */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />

      </div>

      {/* content */}
      <div className="p-8">

        {/* tags */}
        <div className="flex gap-3 mb-4 flex-wrap">

          {project.tags.map((tag, index) => (

            <span key={index} className=" px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
              {tag}
            </span>

          ))}

        </div>

        {/* title */}
        <h3 className="text-3xl font-bold text-white"> {project.title} </h3>

        {/* description */}
        <p className="text-gray-300 mt-4 leading-7"> {project.description}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">

          <a  href={project.live} className="px-5 py-2 rounded-full bg-cyan-500">  Live Demo</a>

          <a href={project.github} className=" px-5 py-2 rounded-full border border-white/20 " > Github </a>

        </div>

      </div>

    </div>

  ))}

</div>

</section>
  </>
  )
}
