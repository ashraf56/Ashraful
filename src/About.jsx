import React from 'react';
import Skills from './Skills';


const About = () => {
    return (
        <div>
    
  
<h1 className='uppercase font-extrabold text-center  text-5xl pt-3 pb-14 '>About Me</h1>
<div className="hero ">

  <div className="hero-content flex-col lg:flex-row-reverse ">
  

  <div style={{ width: "75%"}}>
  
  <Skills></Skills>
     </div>
  

    <div className='w-3/4'>
    <h1 className="text-xl uppercase font-extrabold ">Snippets & Skills </h1>
      <p className="">Welcome to my  portfolio! I'm a passionate and dedicated developer in front-end web development with a strong background in html css  and cssframeworks.I have a good understanding of responsive design principles, ensuring that my websites are optimized for all devices and screen sizes. From desktop to mobile, I strive to create seamless experiences that captivate and engage users. I'm have also good  understanding in MERN stack. Feel free to explore my portfolio, where you'll find examples of my work and the projects I've completed using the MERN stack. lso you'll find a collection of projects showcasing my skills in front-end development. From landing pages to complex web applications, each project reflects my dedication to clean code, performance optimization.</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;