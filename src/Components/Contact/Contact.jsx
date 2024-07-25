// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import './Contact.css'


const Contact = () => {
  return (
    <section>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon" />
                <h4>Email</h4>
                <h5>snehakore054@gmail.com</h5>
                <a href="mailto:snehakore054@gmail.com" target="_blank">Send Message</a>
            </article>
            <article className="contact_option">
                <BsGithub className="contact_option-icon" />
                <h4>Github</h4>
                <h5>https://github.com/snehakore54/</h5>
                <a href="https://github.com/snehakore54/" target="_blank">Open</a>
            </article>
        </div>
        <form action="">
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="message" rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
