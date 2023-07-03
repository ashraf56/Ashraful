import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const skills = [
  { name: "Html", value: 95, color: "#fb5607" },
  { name: "Css", value: 90, color: "#669bbc" },
  { name: "JS", value: 75, color: "#ee9b00" },
  { name: "React js", value: 80, color: "#0077b6" },
  { name: "MongoDb", value: 40, color: "#2a9d8f" },
  { name: "Nodejs", value: 30, color: "Gray" },
  { name: "Express", value: 30, color: "#e09f3e" },
  { name: "Bootstrap", value: 95, color: "#8338ec" },
  { name: "TailwindCSS", value: 90, color: "#48cae4" },
];
const About = () => {
    return (
        <div>
    
  <h1 className='uppercase font-extrabold text-center  text-5xl py-5'>About Me</h1>

<div className="hero min-h-screen ">

  <div className="hero-content flex-col lg:flex-row-reverse ">
   
  <div style={{ width: "70%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
        <Pie
            data={skills}
            dataKey="value"
            fill="white"
            label={(entry) => entry.value + `%` }
          >
            {
              skills.map((entry, index) => (
                <Cell   key={`cell-${index}`}  fill={entry.color} />
              ))
            }
          </Pie>
          <Legend  />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className='w-3/4'>
    <h1 className="text-xl uppercase font-extrabold">Snippets </h1>
      <p className="pb-6">Welcome to my  portfolio! I'm a passionate and dedicated developer in front-end web development with a strong background in html css  and cssframeworks.I have a good understanding of responsive design principles, ensuring that my websites are optimized for all devices and screen sizes. From desktop to mobile, I strive to create seamless experiences that captivate and engage users. I'm have also good  understanding in MERN stack. Feel free to explore my portfolio, where you'll find examples of my work and the projects I've completed using the MEAN stack. lso you'll find a collection of projects showcasing my skills in front-end development. From landing pages to complex web applications, each project reflects my dedication to clean code, performance optimization.</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;