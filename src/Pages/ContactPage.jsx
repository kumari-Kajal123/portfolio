import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {

const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
});

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async(e)=>{
    e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
    // alert("Please fill all fields");
    toast.error("Please fill all fields");
    return;
  }

    try{

        const response = await axios.post(
            // "http://localhost:8000/portfolio/contact",
            "https://portfolio-backend-backend-3.onrender.com/portfolio/contact",
            formData
        );

        // console.log(response.data);

        // alert("Message sent successfully");
         toast.success("Message sent successfully");
        // Clear inputs after successful submit
        setFormData({
          name: "",
          email: "",
          message: ""
        });


    }catch(error){
        console.log(error);
    }
};



  return (<>
<ToastContainer position="top-right" autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  toastStyle={{
    background: "#0f172a",
    color: "#ffffff",
    border: "1px solid rgba(34,211,238,0.3)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(34,211,238,0.2)",
    fontSize: "14px"
  }}
  progressStyle={{
    background: "#22d3ee"
  }}
/>

  <section id="contact" className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* Leftsection */}
    <div>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Let's Work <br /> Together
      </h2>

      <p className="text-gray-400 mt-8 leading-8">
        Have a project idea, collaboration, or freelance work?
        Feel free to contact me anytime.
      </p>

      {/* ContactInfo */}
      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl"> 📧 </div>

          <div>
            <p className="text-gray-400 text-sm"> Email </p>

            <h3 className="text-lg"> kumarikajal.2223k@gmail.com</h3>
          </div>
        </div>


      </div>

    </div>

    {/* Right Section */}
    <div className="  bg-white/5  border border-white/10 rounded-3xl p-8 backdrop-blur-lg " >

      <form className="space-y-6"  onSubmit={handleSubmit}>

        <div>
          <label className="text-gray-300"> Name </label>

          <input name='name'   value={formData.name} onChange={handleChange}  type="text"  placeholder="Enter your name"  className=" w-full mt-2  p-4 rounded-xl bg-[#0f172a] border border-white/10  outline-none " />
        </div>

        <div>
          <label className="text-gray-300"> Email</label>

          <input name='email'   value={formData.email} onChange={handleChange}  type="email" placeholder="Enter your email" className=" w-full mt-2 p-4 rounded-xl bg-[#0f172a]  border border-white/10 outline-none" />
        </div>

        <div>
          <label className="text-gray-300">  Message </label>

          <textarea name='message'   value={formData.message} onChange={handleChange} rows="5" placeholder="Write your message..." className=" w-full  mt-2 p-4  rounded-xl bg-[#0f172a] border border-white/10 outline-none  resize-none " ></textarea>
        </div>

        <button className=" w-full py-4  rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-lg font-semibold ">
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>
  </>
  )
}
