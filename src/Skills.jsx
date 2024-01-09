import React from 'react';
import { TagCloud } from 'react-tagcloud';
import figma from './assets/figma.png'
import mongoDB from './assets/MongoDB.png'
import git from './assets/git.svg'
import vs from './assets/vs.svg'
import post from './assets/postman.svg'
import t from './assets/tail.svg'
import ht from './assets/html.svg'
import c from './assets/css.svg'
import ex from './assets/express.svg'
import js from './assets/javascript.svg'
import re from './assets/react.svg'
import fr from './assets/firebase.svg'
import bt from './assets/bootstrap.svg'
import java from './assets/java.svg'
import C from './assets/c.svg'
import no from './assets/node.svg'
import v from '../public/vite.svg';
import ne from './assets/next.svg';

const data = [
  { value: "Html", count: `${ht}` },
  { value: "Css", count: `${c}` },
  { value: "JavaScript", count: `${js}` },
  { value: "React js", count: `${re}` },
  { value: "MongoDb", count: `${mongoDB}` },
  { value: "Nodejs", count: `${no}` },
  { value: "Express", count: `${ex}` },
  { value: "Bootstrap", count: `${bt}` },
  { value: "TailwindCSS", count: `${t}` },
  { value: "NextJS", count: `${ne}` },
  { value: "Vite", count: `${v}` },
  { value: "C", count: `${C}` },
  { value: "Java", count: `${java}` },
  { value: "FireBase", count: `${fr}` },
  { value: "Figma", count: `${figma}` },
  { value: "Git", count: `${git}` },
  { value: "VS code", count: `${vs}` },
  { value: "Postman", count: `${post}` },
];



const Skills = () => {
  return (
    <div className='my-10 mx-auto'>
      <div className='container mx-auto'>
        <h1 className='text-center font-bold uppercase py-10 text-base md:text-5xl'>All skills and Tools</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mx-auto justify-center px-6'>
          {data.map(d => (
            <div>
              <div className=' bg-base-100 border-1 flex items-center gap-4  '>
                <img src={d.count} alt="" className='w-12 ' />
                <div>
                  <p className='text-2xl font-bold uppercase'>{d.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Skills;