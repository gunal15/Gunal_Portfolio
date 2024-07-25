import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { HiCode } from 'react-icons/hi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { setUserId, setUserProperties } from '../../analytics';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleAboutClick = () => {
    console.log("user id clicked")
    setActiveNav('#about');
    setUserId('david-15');
    setUserProperties({
      email: 'david@intoaec.com',
      name: 'david',
      plan: 'test',
    });
  };

  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>handleAboutClick()} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><VscTools /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><HiCode /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaGraduationCap /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBriefcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;
