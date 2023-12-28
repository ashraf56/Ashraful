import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: "Html", count: 90 },
  { value: "Css", count: 90 },
  { value: "JavaScript", count: 80 },
  { value: "React js", count: 80 },
  { value: "MongoDb", count: 80 },
  { value: "Nodejs", count: 60 },
  { value: "Express", count: 60 },
  { value: "Bootstrap", count: 95 },
  { value: "TailwindCSS", count: 90 },
  { value: "NextJS", count: 70 },
  { value: "Mongose", count: 70 },
  { value: "Vite", count: 70 },
  { value: "C", count: 30 },
  { value: "Java", count: 40 },
  { value: "FireBase", count: 40 },
];
const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'gray'

    }}
  >
    {tag.value}
  </span>
)

const Skills = () => {
  return (
    <TagCloud
      tags={data} minSize={2} maxSize={5} renderer={customRenderer}

    />
  )
};

export default Skills;