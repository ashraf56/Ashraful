import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../src/assets/phone_7048300.png'
const Navbar = () => {
  const [themes, setTheme] = useState(
    localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "light"
  );
  let sun='https://cdn-icons-png.flaticon.com/512/869/869869.png';
let moon='https://cdn-icons-png.flaticon.com/512/547/547433.png'
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};
useEffect(() => {
  localStorage.setItem("Theme", themes);
  const Theme = localStorage.getItem("Theme");
  document.querySelector("html").setAttribute("data-theme", Theme);
}, [themes]);
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to='/'>Home</Link>
      </li>
    
      <li> 
      <Link to='/about'>About</Link>
      </li>
      <li> 
      <Link to='/project'>Projects</Link>
      </li>
      <li> 
      <Link to='/contact'>Contact</Link>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> <img src={img} className='w-10' /> ASHRAFUL</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to='/'>Home</Link>
      </li>
    
      <li> 
      <Link to='/about'>About</Link>
      </li>
      <li> 
      <Link to='/project'>Projects</Link>
      </li>
      <li> 
      <Link to='/contact'>Contact</Link>
      </li>
    </ul>
    <button className="btn btn-square btn-ghost lg:mx-6">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={themes === "light" ? false : true}
            />
            <img src={sun} className="w-8 h-8 swap-on" />
            <img src={moon} className="w-8 h-8 swap-off"/>
          </label>
        </button>

  </div>

</div>
        </div>
    );
};

export default Navbar;