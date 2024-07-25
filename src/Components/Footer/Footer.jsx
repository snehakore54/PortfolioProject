// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footor_logo'>kore</a>
      <ul className='links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
      </ul>

      <div className="footer_social">
        <a href=''><BsLinkedin/></a>
        <a href=''><BsGithub/></a>
        <a href=''><BsMedium/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sneha Kore. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
