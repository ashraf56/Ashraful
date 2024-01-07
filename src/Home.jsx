import React from 'react';
import Banner from './Banner';
import About from './About';
import Project from './Projects/Project';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    
    </div>
  );
};

export default Home;