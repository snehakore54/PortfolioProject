/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';
import './Home.css';
//import profileImage from '../assets/images/profile-image.webp';

const Home = () => {
  return (
    <header id="home">
      <div className='container home-container'>
        <h5>Hello, I'm</h5>
        <h1>Sneha Kore</h1>
        <h5 className='text-light'> Full-stack Software Engineer</h5>
        <div className='cta'>
          <a href="" download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
        <div className="home_social">
          <a href=''>
            <BsLinkedin />
          </a>
          <a href=''>
            <BsGithub />
          </a>
          <a href=''>
            <BsMedium />
          </a>
        </div>
        <div className="me">
          <img src='\images\STK-20240724-WA0013.webp' alt="Kore" />
        </div>
        <a href='/contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
