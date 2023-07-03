import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume_of_Ashraful.pdf'; 
        link.download = 'resume_of_Ashraful.pdf'; 
        link.click();
      };

    return (
        <div>
<div className="hero min-h-screen md:h-auto bg-gradient-to-r from-rose-100 to-teal-100">
  <div className="hero-content text-black ">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold  text-center">Hello!  I'm</h1>
      <h1 className=" text-4xl font-bold  pt-2 text-center" >
      
      <TypeAnimation
          preRenderFirstString={true}
  sequence={[
    'Ashraful islam ',
    1000,
    'A MERN Stack Developer',
    1000,
    'A Front End Developer',
    1000,
 
  ]}
  speed={50}
  repeat={Infinity}
/>

      </h1>
      

      <p className="py-6   text-center">Welcome to my  portfolio! I'm a passionate and dedicated developer in front-end web development with a strong background in html css  and cssframeworks.I have  good  understanding in MERN stack .  </p>
      <div className=' text-center'>
        
      <button className="btn btn-warning  " onClick={handleDownload}>Get Resume </button>
      </div>
    </div>
  </div>
</div>        </div>
    );
};

export default Banner;