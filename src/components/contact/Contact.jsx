import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_option'>
          <article className='contact_option'>
            <FiMail/>
            <h4>Email</h4>
            <h5>johirul35-257@diu.edu.bd</h5>
            <a href="mailto:johirul35-257@diu.edu.bd" target="_blank">Send a message</a>

          </article>
          <article className='contact_option'>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Johirul Islam</h5>
            <a href="https://m.me/johirulislam.joy.3" target="_blank">Send a message</a>

          </article>
          <article className='contact_option'>
            <FaWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+8801971478496</h5>
            <a href="https://api.whatsapp.com/send?phone+8801971478496" target="_blank">Send a message</a>

          </article>

        </div>
        {/* END OF CONTACT OPTION */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="Message"  rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>

      </div>
    </section>
  )
}

export default contact