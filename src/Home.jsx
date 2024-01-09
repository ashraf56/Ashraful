import React from 'react';
import Banner from './Banner';
import About from './About';
import Project from './Projects/Project';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    
    </div>
  );
};

export default Home;