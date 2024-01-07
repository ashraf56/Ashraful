import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  
  return (
    <div>
      <div className="hero  py-20  bg-gradient-to-r from-rose-100 to-teal-100  " >
        <div className="hero-content text-black  ">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold  text-center">Hello!  I'm</h1>
            <h1 className=" text-4xl font-bold  pt-2 text-center" >

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  'Ashraful islam ',
                  1000,
                  'A Web Developer',
                  1000,
                  'A Front End Developer',
                  1000,
                  'A React Developer',
                  1000,
                  'A MERN Stack Developer',
                  1000

                ]}
                speed={50}
                repeat={Infinity}
              />

            </h1>


            <p className="py-6   text-center">Welcome to my  portfolio! I'm a passionate and dedicated developer in front-end web development with a strong background in html css  and cssframeworks.I have  good  understanding in MERN stack .  </p>
            <div className=' text-center'>

              <button className="btn btn-warning  " ><a  className='animate-pulse' href="https://drive.google.com/file/d/1dma6NYxvQhX3MHhZs1GxmK_xZiNBnZ1h/view?usp=sharing">Get Resume</a>   </button>
            </div>
          </div>
        </div>
      </div>        </div>
  );
};

export default Banner;