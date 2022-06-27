import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import {useState as Usestate,useRef as UseRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = UseRef()

    const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_q5ljgmh', 'template_fq45tqh', form.current, 'bNfCn-pUAfYyHeHwQ')
    e.target.reset();
    
     
  };
 

  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_option'>
          <article className='contact_option'>
            <FiMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>johirul35-257@diu.edu.bd</h5>
            <a href="mailto:johirul35-257@diu.edu.bd" target="_blank">Send a message</a>

          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Johirul Islam</h5>
            <a href="https://m.me/johirulislam.joy.3" target="_blank">Send a message</a>

          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+8801971478496</h5>
            <a href="https://api.whatsapp.com/send?phone+8801971478496" target="_blank">Send a message</a>

          </article>

        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="Message"  rows="7" placeholder='Type your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact