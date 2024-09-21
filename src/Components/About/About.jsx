/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { BsTelephoneForward } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import './About.css'

const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        
        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me_image'>
                    <img src="/images/InShot_20230509_181731107~2.jpg" alt='kore' className='image'/>
                </div>
            </div>

            <div className="about-content">
                <div className="about_cards">
                    <article className="about_card">
                      <GiGraduateCap className='about_icon'/>
                      <h5>Degree</h5>
                      <small>B.com (CA)</small> <br/>
                      <i> City Mahila Degree College </i>
                    </article>
                    <article className="about_card">
                      <TfiWorld className='about_icon'/>
                      <h5>Location</h5>
                      <small> Hanamkonda</small>
                    </article>
                    <article className="about_card">
                      <BsTelephoneForward className='about_icon'/>
                      <h5>Contact</h5>
                      <small>
                        <ul>
                            <li>Phone</li>
                            <li>Email: snehakore054@gmail.com </li>
                        </ul>
                      </small>
                    </article>
                </div>
                <p className='para'>Hi, I'm Sneha Kore, a skilled full-stack developer. I have successfully completed a comprehensive full-stack development course at Nxtwave, where I gained in-depth knowledge and practical skills. Additionally, I have hands-on experience in building front-end applications, allowing me to create efficient, user-friendly interfaces and contribute effectively to both front-end and back-end development projects.</p>
            </div>
        </div>
    </section>
  )
}

export default About;

