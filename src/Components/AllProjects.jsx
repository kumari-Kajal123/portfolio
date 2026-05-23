import React from "react";

export default function AllProjects() {

  const projects = [

    {
      id: 1,
      title: "Password Generator",
      image: "/images/portfolio.png",
      technologies: "React, BootStrap",
      github: "https://github.com/kumari-Kajal123"
    },

    {
      id: 2,
      title: "Form Data",
      image: "/images/chatapp.png",
      technologies: "React , BootStrap",
      github: "https://github.com/kumari-Kajal123"
    },

    {
      id: 3,
      title: "Floating Emoji",
      image: "/images/food.png",
      technologies: "React, BootStrap",
      github: "https://github.com/kumari-Kajal123"
    },

    {
      id: 4,
      title: "Quiz Question",
      image: "/images/food.png",
      technologies: "React, BootStrap",
      github: "https://github.com/kumari-Kajal123"
    },

    {
      id: 5,
      title: "Funny Asking Gif",
      image: "/images/food.png",
      technologies: "React, BootStrap",
      github: "https://github.com/kumari-Kajal123"
    }

  ];

  return (

    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-5xl font-bold"> All Projects </h1>

        <p className="text-gray-400 mt-4"> My featured work and development projects </p>

      </div>

      {/* Projects List */}
      <div className="mt-20 space-y-10">

        {projects.map((project) => (

          <div key={project.id} className="flex flex-col md:flex-row gap-8 items-center border-b border-white/10 pb-10" >

            {/* Image */}
            {/* <img src={project.image} alt={project.title} className="w-full md:w-72 h-44 object-cover rounded-2xl" /> */}

            {/* Content */}
            <div className="flex-1">

              <h2 className="text-3xl font-bold"> {project.title}  </h2>

              <p className="text-gray-400 mt-4">
                <span className="text-white font-semibold">  Technologies: </span>{" "}
                {project.technologies}
              </p>

              <a  href={project.github} target="_blank" rel="noreferrer" className="inline-block mt-6 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition">
                View Github
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}