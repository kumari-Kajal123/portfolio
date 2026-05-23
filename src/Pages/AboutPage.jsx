import React from 'react'
import image from "../assets/kajal2.jpeg"
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (<>

  <section id="about" className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Left Side Image */}
    <div className="flex justify-center relative">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Image */}

      <div className="relative flex justify-center items-center">

  {/* Background Grid */}
  <div className=" absolute w-[320px]  h-[420px] border border-cyan-400/20 rounded-[40px] translate-x-6 translate-y-6" ></div>

  {/* Main Card */}
  <div className=" relative w-[320px] h-[420px] rounded-[40px] overflow-hidden bg-[#111827] shadow-[0_25px_60px_rgba(0,0,0,0.6)] group ">

    {/* Image */}
    <img src={image} alt="about" className=" w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700 " />

    {/* Dark Overlay */}
    <div className=" absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent " ></div>

    {/* Floating Text */}
    <div className="absolute bottom-6 left-6 z-20">

      <h2 className="text-3xl font-bold text-white mt-2"> Kajal </h2>

      <p className="text-gray-300 text-sm mt-2"> Developer </p>
    </div>

    {/* Floating Small Card */}
    <div  className=" absolute top-5 right-5 bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-2xl text-white text-sm ">
      ✦ Creative
    </div>

  </div>
</div>

    </div>

    {/* Right Side Content */}
    <div>

      <p className="text-cyan-400 uppercase tracking-[4px] mb-4"> About Me </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">  Full Stack Developer MERN  </h2>

      <p className="text-gray-400 mt-8 leading-8 text-lg">
        I am creating modern and responsive web applications.
        Skilled in React, Tailwind CSS, JavaScript, Node.js, Express.js, and MongoDB.
        Focused on building clean UI, smooth user experiences, and scalable backend systems.
        Also interested in creative design, and interactive web experiences.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-4 mt-10">

        <span className="px-5 py-2 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"> React </span>

        <span className="px-5 py-2 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400">Tailwind </span>

        <span className="px-5 py-2 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"> socket.io</span>

        <span className="px-5 py-2 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400">  JAVA </span>

      </div>

      {/* Button */}
      <button className=" mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 " >
        <a href="https://drive.google.com/file/d/1I8FH3E96oEI6Sbb_0X_riJPOdWIY66U2/view?usp=sharing"> Download CV </a>
      </button>

    </div>
  </div>

  <div className="min-h-[80vh] bg-[#0f172a] text-white py-16 px-6 mt-5">
  <h2 className="text-4xl font-bold text-center mb-14">
    What We Offer
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Card 1 */}
    <Link to='/contact-us' > 
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500 shadow-xl">
        
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-4xl">
          🚀
        </div>

        <h5 className="text-2xl font-semibold mb-4"> Fast Performance</h5>

        <p className="text-gray-400 leading-relaxed"> Optimize code and assets for lightning speed! </p>
      </div>
    </Link>
    {/* Card 2 */}
    <Link to='/contact-us' >
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-green-400/40 transition-all duration-500 shadow-xl">
        
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center text-4xl">
          📱
        </div>

        <h5 className="text-2xl font-semibold mb-4"> Fully Responsive </h5>

        <p className="text-gray-400 leading-relaxed">  Works perfectly on all devices and screen sizes.</p>
      </div>
    </Link>
    {/* Card 3 */}
    <Link to='/contact-us' >
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-pink-400/40 transition-all duration-500 shadow-xl">
        
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-500/10 flex items-center justify-center text-4xl">
          🎨
        </div>

        <h5 className="text-2xl font-semibold mb-4"> Modern Styling </h5>

        <p className="text-gray-400 leading-relaxed"> CSS transitions and smooth animations included. </p>
      </div>
    </Link>
  </div>
</div>

</section>
  
  </>
  )
}
